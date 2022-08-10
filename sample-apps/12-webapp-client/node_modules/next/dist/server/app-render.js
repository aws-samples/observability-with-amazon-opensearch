"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderToHTML = renderToHTML;
var _react = _interopRequireDefault(require("react"));
var _querystring = require("querystring");
var _reactServerDomWebpack = require("next/dist/compiled/react-server-dom-webpack");
var _writerBrowserServer = require("next/dist/compiled/react-server-dom-webpack/writer.browser.server");
var _styledJsx = require("styled-jsx");
var _renderResult = _interopRequireDefault(require("./render-result"));
var _nodeWebStreamsHelper = require("./node-web-streams-helper");
var _utils = require("../shared/lib/router/utils");
var _node = require("./api-utils/node");
var _htmlescape = require("./htmlescape");
var _utils1 = require("./utils");
var _matchSegments = require("../client/components/match-segments");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// this needs to be required lazily so that `next-server` can set
// the env before we require
const ReactDOMServer = _utils1.shouldUseReactRoot ? require("react-dom/server.browser") : require("react-dom/server");
function interopDefault(mod) {
    return mod.default || mod;
}
const rscCache = new Map();
var // Shadowing check does not work with TypeScript enums
// eslint-disable-next-line no-shadow
RecordStatus;
(function(RecordStatus) {
    RecordStatus[RecordStatus["Pending"] = 0] = "Pending";
    RecordStatus[RecordStatus["Resolved"] = 1] = "Resolved";
    RecordStatus[RecordStatus["Rejected"] = 2] = "Rejected";
})(RecordStatus || (RecordStatus = {}));
function createRecordFromThenable(thenable) {
    const record = {
        status: 0,
        value: thenable
    };
    thenable.then(function(value) {
        if (record.status === 0) {
            const resolvedRecord = record;
            resolvedRecord.status = 1;
            resolvedRecord.value = value;
        }
    }, function(err) {
        if (record.status === 0) {
            const rejectedRecord = record;
            rejectedRecord.status = 2;
            rejectedRecord.value = err;
        }
    });
    return record;
}
function readRecordValue(record) {
    if (record.status === 1) {
        return record.value;
    } else {
        throw record.value;
    }
}
function preloadDataFetchingRecord(map, key, fetcher) {
    let record = map.get(key);
    if (!record) {
        const thenable = fetcher();
        record = createRecordFromThenable(thenable);
        map.set(key, record);
    }
    return record;
}
function useFlightResponse(writable, cachePrefix, req, serverComponentManifest) {
    const id = cachePrefix + "," + _react.default.useId();
    let entry = rscCache.get(id);
    if (!entry) {
        const [renderStream, forwardStream] = (0, _nodeWebStreamsHelper).readableStreamTee(req);
        entry = (0, _reactServerDomWebpack).createFromReadableStream(renderStream, {
            moduleMap: serverComponentManifest.__ssr_module_mapping__
        });
        rscCache.set(id, entry);
        let bootstrapped = false;
        // We only attach CSS chunks to the inlined data.
        const forwardReader = forwardStream.getReader();
        const writer = writable.getWriter();
        function process() {
            forwardReader.read().then(({ done , value  })=>{
                if (!bootstrapped) {
                    bootstrapped = true;
                    writer.write((0, _nodeWebStreamsHelper).encodeText(`<script>(self.__next_s=self.__next_s||[]).push(${(0, _htmlescape).htmlEscapeJsonString(JSON.stringify([
                        0,
                        id
                    ]))})</script>`));
                }
                if (done) {
                    rscCache.delete(id);
                    writer.close();
                } else {
                    const responsePartial = (0, _nodeWebStreamsHelper).decodeText(value);
                    const scripts = `<script>(self.__next_s=self.__next_s||[]).push(${(0, _htmlescape).htmlEscapeJsonString(JSON.stringify([
                        1,
                        id,
                        responsePartial
                    ]))})</script>`;
                    writer.write((0, _nodeWebStreamsHelper).encodeText(scripts));
                    process();
                }
            });
        }
        process();
    }
    return entry;
}
// Create the wrapper component for a Flight stream.
function createServerComponentRenderer(ComponentToRender, ComponentMod, { cachePrefix , transformStream , serverComponentManifest , serverContexts  }) {
    // We need to expose the `__webpack_require__` API globally for
    // react-server-dom-webpack. This is a hack until we find a better way.
    if (ComponentMod.__next_app_webpack_require__ || ComponentMod.__next_rsc__) {
        // @ts-ignore
        globalThis.__next_require__ = ComponentMod.__next_app_webpack_require__ || ComponentMod.__next_rsc__.__webpack_require__;
        // @ts-ignore
        globalThis.__next_chunk_load__ = ()=>Promise.resolve();
    }
    let RSCStream;
    const createRSCStream = ()=>{
        if (!RSCStream) {
            RSCStream = (0, _writerBrowserServer).renderToReadableStream(/*#__PURE__*/ _react.default.createElement(ComponentToRender, null), serverComponentManifest, {
                context: serverContexts
            });
        }
        return RSCStream;
    };
    const writable = transformStream.writable;
    return function ServerComponentWrapper() {
        const reqStream = createRSCStream();
        const response = useFlightResponse(writable, cachePrefix, reqStream, serverComponentManifest);
        return response.readRoot();
    };
}
function getShortDynamicParamType(type) {
    switch(type){
        case "catchall":
            return "c";
        case "optional-catchall":
            return "oc";
        case "dynamic":
            return "d";
        default:
            throw new Error("Unknown dynamic param type");
    }
}
function getSegmentParam(segment) {
    if (segment.startsWith("[[...") && segment.endsWith("]]")) {
        return {
            type: "optional-catchall",
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith("[...") && segment.endsWith("]")) {
        return {
            type: "catchall",
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith("[") && segment.endsWith("]")) {
        return {
            type: "dynamic",
            param: segment.slice(1, -1)
        };
    }
    return null;
}
function getCssInlinedLinkTags(ComponentMod, serverComponentManifest) {
    var ref;
    const importedServerCSSFiles = ((ref = ComponentMod.__client__) == null ? void 0 : ref.__next_rsc_css__) || [];
    return Array.from(new Set(importedServerCSSFiles.map((css)=>css.endsWith(".css") ? serverComponentManifest[css].default.chunks : []).flat()));
}
async function renderToHTML(req, res, pathname, query, renderOpts, isPagesDir) {
    // @ts-expect-error createServerContext exists in react@experimental + react-dom@experimental
    if (typeof _react.default.createServerContext === "undefined") {
        throw new Error('"app" directory requires React.createServerContext which is not available in the version of React you are using. Please update to react@experimental and react-dom@experimental.');
    }
    // don't modify original query object
    query = Object.assign({}, query);
    const { buildManifest , serverComponentManifest , supportsDynamicHTML , runtime , ComponentMod ,  } = renderOpts;
    const isFlight = query.__flight__ !== undefined;
    if (isFlight && isPagesDir) {
        (0, _utils1).stripInternalQueries(query);
        const search = (0, _querystring).stringify(query);
        // Empty so that the client-side router will do a full page navigation.
        const flightData = pathname + (search ? `?${search}` : "");
        return new _renderResult.default((0, _writerBrowserServer).renderToReadableStream(flightData, serverComponentManifest).pipeThrough((0, _nodeWebStreamsHelper).createBufferedTransformStream()));
    }
    // TODO-APP: verify the tree is valid
    // TODO-APP: verify query param is single value (not an array)
    // TODO-APP: verify tree can't grow out of control
    const providedFlightRouterState = isFlight ? query.__flight_router_state_tree__ ? JSON.parse(query.__flight_router_state_tree__) : {} : undefined;
    (0, _utils1).stripInternalQueries(query);
    const hasConcurrentFeatures = !!runtime;
    const pageIsDynamic = (0, _utils).isDynamicRoute(pathname);
    const LayoutRouter = ComponentMod.LayoutRouter;
    const HotReloader = ComponentMod.HotReloader;
    const headers = req.headers;
    // @ts-expect-error TODO-APP: fix type of req
    const cookies = req.cookies;
    const tree = ComponentMod.tree;
    // Reads of this are cached on the `req` object, so this should resolve
    // instantly. There's no need to pass this data down from a previous
    // invoke, where we'd have to consider server & serverless.
    const previewData = (0, _node).tryGetPreviewData(req, res, renderOpts.previewProps);
    const isPreview = previewData !== false;
    const serverContexts = [
        [
            "WORKAROUND",
            null
        ],
        [
            "HeadersContext",
            headers
        ],
        [
            "CookiesContext",
            cookies
        ],
        [
            "PreviewDataContext",
            previewData
        ], 
    ];
    const dataCache = new Map();
    const pathParams = renderOpts.params;
    const getDynamicParamFromSegment = (// [id] or [slug]
    segment)=>{
        const segmentParam = getSegmentParam(segment);
        if (!segmentParam) {
            return null;
        }
        const key = segmentParam.param;
        const value = pathParams[key];
        if (!value) {
            if (segmentParam.type === "optional-catchall") {
                return {
                    param: key,
                    value: null,
                    type: getShortDynamicParamType(segmentParam.type),
                    treeValue: ""
                };
            }
            return null;
        }
        return {
            param: key,
            value: value,
            treeValue: Array.isArray(value) ? value.join("/") : value,
            type: getShortDynamicParamType(segmentParam.type)
        };
    };
    const createFlightRouterStateFromLoaderTree = ([segment, parallelRoutes, { loading  }])=>{
        const hasLoading = Boolean(loading);
        const dynamicParam = getDynamicParamFromSegment(segment);
        const segmentTree = [
            dynamicParam ? [
                dynamicParam.param,
                dynamicParam.treeValue,
                dynamicParam.type
            ] : segment,
            {}, 
        ];
        if (parallelRoutes) {
            segmentTree[1] = Object.keys(parallelRoutes).reduce((existingValue, currentValue)=>{
                existingValue[currentValue] = createFlightRouterStateFromLoaderTree(parallelRoutes[currentValue]);
                return existingValue;
            }, {});
        }
        if (hasLoading) {
            segmentTree[4] = "loading";
        }
        return segmentTree;
    };
    const createComponentTree = async ({ createSegmentPath , tree: [segment, parallelRoutes, { layout , loading , page  }] , parentParams , firstItem , rootLayoutIncluded  })=>{
        const Loading = loading ? await interopDefault(loading()) : undefined;
        const isLayout = typeof layout !== "undefined";
        const isPage = typeof page !== "undefined";
        const layoutOrPageMod = isLayout ? await layout() : isPage ? await page() : undefined;
        const rootLayoutAtThisLevel = isLayout && !rootLayoutIncluded;
        const rootLayoutIncludedAtThisLevelOrAbove = rootLayoutIncluded || rootLayoutAtThisLevel;
        const isClientComponentModule = layoutOrPageMod && !layoutOrPageMod.hasOwnProperty("__next_rsc__");
        // Only server components can have getServerSideProps / getStaticProps
        // TODO-APP: friendly error with correct stacktrace. Potentially this can be part of the compiler instead.
        if (isClientComponentModule) {
            if (layoutOrPageMod.getServerSideProps) {
                throw new Error("getServerSideProps is not supported on Client Components");
            }
            if (layoutOrPageMod.getStaticProps) {
                throw new Error("getStaticProps is not supported on Client Components");
            }
        }
        const Component = layoutOrPageMod ? interopDefault(layoutOrPageMod) : undefined;
        const segmentParam = getDynamicParamFromSegment(segment);
        const currentParams = // Handle null case where dynamic param is optional
        segmentParam && segmentParam.value !== null ? {
            ...parentParams,
            [segmentParam.param]: segmentParam.value
        } : parentParams;
        const actualSegment = segmentParam ? [
            segmentParam.param,
            segmentParam.treeValue
        ] : segment;
        // This happens outside of rendering in order to eagerly kick off data fetching for layouts / the page further down
        const parallelRouteMap = await Promise.all(Object.keys(parallelRoutes).map(async (parallelRouteKey)=>{
            const currentSegmentPath = firstItem ? [
                parallelRouteKey
            ] : [
                actualSegment,
                parallelRouteKey
            ];
            const { Component: ChildComponent  } = await createComponentTree({
                createSegmentPath: (child)=>{
                    return createSegmentPath([
                        ...currentSegmentPath,
                        ...child
                    ]);
                },
                tree: parallelRoutes[parallelRouteKey],
                parentParams: currentParams,
                rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove
            });
            const childSegmentParam = getDynamicParamFromSegment(parallelRoutes[parallelRouteKey][0]);
            const childProp = {
                current: /*#__PURE__*/ _react.default.createElement(ChildComponent, null),
                segment: childSegmentParam ? [
                    childSegmentParam.param,
                    childSegmentParam.treeValue,
                    childSegmentParam.type, 
                ] : parallelRoutes[parallelRouteKey][0]
            };
            return [
                parallelRouteKey,
                /*#__PURE__*/ _react.default.createElement(LayoutRouter, {
                    parallelRouterKey: parallelRouteKey,
                    segmentPath: createSegmentPath(currentSegmentPath),
                    loading: Loading ? /*#__PURE__*/ _react.default.createElement(Loading, null) : undefined,
                    childProp: childProp,
                    rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove
                }), 
            ];
        }));
        const parallelRouteComponents = parallelRouteMap.reduce((list, [parallelRouteKey, Comp])=>{
            list[parallelRouteKey] = Comp;
            return list;
        }, {});
        // When the segment does not have a layout/page we still have to add the layout router to ensure the path holds the loading component
        if (!Component) {
            return {
                Component: ()=>/*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, parallelRouteComponents.children)
            };
        }
        const segmentPath = createSegmentPath([
            actualSegment
        ]);
        const dataCacheKey = JSON.stringify(segmentPath);
        let fetcher = null;
        // TODO-APP: pass a shared cache from previous getStaticProps/getServerSideProps calls?
        if (layoutOrPageMod.getServerSideProps) {
            // TODO-APP: recommendation for i18n
            // locales: (renderOpts as any).locales, // always the same
            // locale: (renderOpts as any).locale, // /nl/something -> nl
            // defaultLocale: (renderOpts as any).defaultLocale, // changes based on domain
            const getServerSidePropsContext = {
                headers,
                cookies,
                layoutSegments: segmentPath,
                // TODO-APP: change pathname to actual pathname, it holds the dynamic parameter currently
                ...isPage ? {
                    searchParams: query,
                    pathname
                } : {},
                ...pageIsDynamic ? {
                    params: currentParams
                } : undefined,
                ...isPreview ? {
                    preview: true,
                    previewData: previewData
                } : undefined
            };
            fetcher = ()=>Promise.resolve(layoutOrPageMod.getServerSideProps(getServerSidePropsContext));
        }
        // TODO-APP: implement layout specific caching for getStaticProps
        if (layoutOrPageMod.getStaticProps) {
            const getStaticPropsContext = {
                layoutSegments: segmentPath,
                ...isPage ? {
                    pathname
                } : {},
                ...pageIsDynamic ? {
                    params: currentParams
                } : undefined,
                ...isPreview ? {
                    preview: true,
                    previewData: previewData
                } : undefined
            };
            fetcher = ()=>Promise.resolve(layoutOrPageMod.getStaticProps(getStaticPropsContext));
        }
        if (fetcher) {
            // Kick off data fetching before rendering, this ensures there is no waterfall for layouts as
            // all data fetching required to render the page is kicked off simultaneously
            preloadDataFetchingRecord(dataCache, dataCacheKey, fetcher);
        }
        return {
            Component: ()=>{
                let props;
                if (fetcher) {
                    // The data fetching was kicked off before rendering (see above)
                    // if the data was not resolved yet the layout rendering will be suspended
                    const record = preloadDataFetchingRecord(dataCache, dataCacheKey, fetcher);
                    // Result of calling getStaticProps or getServerSideProps. If promise is not resolve yet it will suspend.
                    const recordValue = readRecordValue(record);
                    if (props) {
                        props = Object.assign({}, props, recordValue.props);
                    } else {
                        props = recordValue.props;
                    }
                }
                return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, props, parallelRouteComponents, {
                    // TODO-APP: params and query have to be blocked parallel route names. Might have to add a reserved name list.
                    // Params are always the current params that apply to the layout
                    // If you have a `/dashboard/[team]/layout.js` it will provide `team` as a param but not anything further down.
                    params: currentParams
                }, isPage ? {
                    searchParams: query
                } : {}));
            }
        };
    };
    if (isFlight) {
        // TODO-APP: throw on invalid flightRouterState
        const walkTreeWithFlightRouterState = async (treeToFilter, parentParams, flightRouterState, parentRendered)=>{
            const [segment, parallelRoutes] = treeToFilter;
            const parallelRoutesKeys = Object.keys(parallelRoutes);
            const segmentParam = getDynamicParamFromSegment(segment);
            const currentParams = // Handle null case where dynamic param is optional
            segmentParam && segmentParam.value !== null ? {
                ...parentParams,
                [segmentParam.param]: segmentParam.value
            } : parentParams;
            const actualSegment = segmentParam ? [
                segmentParam.param,
                segmentParam.treeValue,
                segmentParam.type
            ] : segment;
            const renderComponentsOnThisLevel = !flightRouterState || !(0, _matchSegments).matchSegment(actualSegment, flightRouterState[0]) || // Last item in the tree
            parallelRoutesKeys.length === 0 || // Explicit refresh
            flightRouterState[3] === "refetch";
            if (!parentRendered && renderComponentsOnThisLevel) {
                return [
                    actualSegment,
                    createFlightRouterStateFromLoaderTree(treeToFilter),
                    /*#__PURE__*/ _react.default.createElement((await createComponentTree(// This ensures flightRouterPath is valid and filters down the tree
                    {
                        createSegmentPath: (child)=>child,
                        tree: treeToFilter,
                        parentParams: currentParams,
                        firstItem: true
                    })).Component), 
                ];
            }
            for (const parallelRouteKey of parallelRoutesKeys){
                const parallelRoute = parallelRoutes[parallelRouteKey];
                const path = await walkTreeWithFlightRouterState(parallelRoute, currentParams, flightRouterState && flightRouterState[1][parallelRouteKey], parentRendered || renderComponentsOnThisLevel);
                if (typeof path[path.length - 1] !== "string") {
                    return [
                        actualSegment,
                        parallelRouteKey,
                        ...path
                    ];
                }
            }
            return [
                actualSegment
            ];
        };
        const flightData = [
            // TODO-APP: change walk to output without ''
            (await walkTreeWithFlightRouterState(tree, {}, providedFlightRouterState)).slice(1), 
        ];
        return new _renderResult.default((0, _writerBrowserServer).renderToReadableStream(flightData, serverComponentManifest, {
            context: serverContexts
        }).pipeThrough((0, _nodeWebStreamsHelper).createBufferedTransformStream()));
    }
    const search = (0, _querystring).stringify(query);
    // TODO-APP: validate req.url as it gets passed to render.
    const initialCanonicalUrl = req.url;
    const initialTree = createFlightRouterStateFromLoaderTree(tree);
    const initialStylesheets = getCssInlinedLinkTags(ComponentMod, serverComponentManifest);
    const { Component: ComponentTree  } = await createComponentTree({
        createSegmentPath: (child)=>child,
        tree,
        parentParams: {},
        firstItem: true
    });
    const AppRouter = ComponentMod.AppRouter;
    const { QueryContext , PathnameContext ,  } = ComponentMod.hooksClientContext;
    const WrappedComponentTreeWithRouter = ()=>{
        return /*#__PURE__*/ _react.default.createElement(QueryContext.Provider, {
            value: query
        }, /*#__PURE__*/ _react.default.createElement(PathnameContext.Provider, {
            value: pathname
        }, /*#__PURE__*/ _react.default.createElement(AppRouter, {
            hotReloader: HotReloader && /*#__PURE__*/ _react.default.createElement(HotReloader, {
                assetPrefix: ""
            }),
            initialCanonicalUrl: initialCanonicalUrl,
            initialTree: initialTree,
            initialStylesheets: initialStylesheets
        }, /*#__PURE__*/ _react.default.createElement(ComponentTree, null))));
    };
    const bootstrapScripts = buildManifest.rootMainFiles.map((src)=>"/_next/" + src);
    let serverComponentsInlinedTransformStream = null;
    serverComponentsInlinedTransformStream = new TransformStream();
    const Component1 = createServerComponentRenderer(WrappedComponentTreeWithRouter, ComponentMod, {
        cachePrefix: pathname + (search ? `?${search}` : ""),
        transformStream: serverComponentsInlinedTransformStream,
        serverComponentManifest,
        serverContexts
    });
    const jsxStyleRegistry = (0, _styledJsx).createStyleRegistry();
    const styledJsxFlushEffect = ()=>{
        const styles = jsxStyleRegistry.styles();
        jsxStyleRegistry.flush();
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, styles);
    };
    const AppContainer = ({ children  })=>/*#__PURE__*/ _react.default.createElement(_styledJsx.StyleRegistry, {
            registry: jsxStyleRegistry
        }, children);
    /**
   * Rules of Static & Dynamic HTML:
   *
   *    1.) We must generate static HTML unless the caller explicitly opts
   *        in to dynamic HTML support.
   *
   *    2.) If dynamic HTML support is requested, we must honor that request
   *        or throw an error. It is the sole responsibility of the caller to
   *        ensure they aren't e.g. requesting dynamic HTML for an AMP page.
   *
   * These rules help ensure that other existing features like request caching,
   * coalescing, and ISR continue working as intended.
   */ const generateStaticHTML = supportsDynamicHTML !== true;
    const bodyResult = async ()=>{
        const content = /*#__PURE__*/ _react.default.createElement(AppContainer, null, /*#__PURE__*/ _react.default.createElement(Component1, null));
        const renderStream = await (0, _nodeWebStreamsHelper).renderToInitialStream({
            ReactDOMServer,
            element: content,
            streamOptions: {
                bootstrapScripts
            }
        });
        const flushEffectHandler = ()=>{
            const flushed = ReactDOMServer.renderToString(styledJsxFlushEffect());
            return flushed;
        };
        return await (0, _nodeWebStreamsHelper).continueFromInitialStream(renderStream, {
            dataStream: serverComponentsInlinedTransformStream == null ? void 0 : serverComponentsInlinedTransformStream.readable,
            generateStaticHTML: generateStaticHTML || !hasConcurrentFeatures,
            flushEffectHandler,
            initialStylesheets
        });
    };
    return new _renderResult.default(await bodyResult());
}

//# sourceMappingURL=app-render.js.map