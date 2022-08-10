"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AppRouter;
exports.fetchServerResponse = fetchServerResponse;
var _react = _interopRequireWildcard(require("react"));
var _reactServerDomWebpack = require("next/dist/compiled/react-server-dom-webpack");
var _appRouterContext = require("../../shared/lib/app-router-context");
var _reducer = require("./reducer");
var _hooksClientContext = require("./hooks-client-context");
function AppRouter({ initialTree , initialCanonicalUrl , initialStylesheets , children , hotReloader  }) {
    const [{ tree , cache , pushRef , focusRef , canonicalUrl  }, dispatch] = _react.default.useReducer(_reducer.reducer, {
        tree: initialTree,
        cache: {
            data: null,
            subTreeData: children,
            parallelRoutes: typeof window === 'undefined' ? new Map() : initialParallelRoutes
        },
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusRef: {
            focus: false
        },
        canonicalUrl: initialCanonicalUrl
    });
    (0, _react).useEffect(()=>{
        initialParallelRoutes = null;
    }, []);
    const { query , pathname  } = _react.default.useMemo(()=>{
        const url = new URL(canonicalUrl, typeof window === 'undefined' ? 'http://n' : window.location.href);
        const queryObj = {};
        url.searchParams.forEach((value, key)=>{
            queryObj[key] = value;
        });
        return {
            query: queryObj,
            pathname: url.pathname
        };
    }, [
        canonicalUrl
    ]);
    // Server response only patches the tree
    const changeByServerResponse = _react.default.useCallback((previousTree, flightData)=>{
        dispatch({
            type: 'server-patch',
            payload: {
                flightData,
                previousTree,
                cache: {
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map()
                }
            }
        });
    }, []);
    const appRouter = _react.default.useMemo(()=>{
        const navigate = (href, cacheType, navigateType)=>{
            return dispatch({
                type: 'navigate',
                payload: {
                    url: new URL(href, location.origin),
                    cacheType,
                    navigateType,
                    cache: {
                        data: null,
                        subTreeData: null,
                        parallelRoutes: new Map()
                    },
                    mutable: {}
                }
            });
        };
        const routerInstance = {
            // TODO-APP: implement prefetching of loading / flight
            prefetch: (_href)=>Promise.resolve(),
            replace: (href)=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, 'hard', 'replace');
                });
            },
            softReplace: (href)=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, 'soft', 'replace');
                });
            },
            softPush: (href)=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, 'soft', 'push');
                });
            },
            push: (href)=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, 'hard', 'push');
                });
            },
            reload: ()=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    dispatch({
                        type: 'reload',
                        payload: {
                            // TODO-APP: revisit if this needs to be passed.
                            url: new URL(window.location.href),
                            cache: {
                                data: null,
                                subTreeData: null,
                                parallelRoutes: new Map()
                            },
                            mutable: {}
                        }
                    });
                });
            }
        };
        return routerInstance;
    }, []);
    (0, _react).useEffect(()=>{
        if (pushRef.mpaNavigation) {
            window.location.href = canonicalUrl;
            return;
        }
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush) {
            pushRef.pendingPush = false;
            window.history.pushState(historyState, '', canonicalUrl);
        } else {
            window.history.replaceState(historyState, '', canonicalUrl);
        }
    }, [
        tree,
        pushRef,
        canonicalUrl
    ]);
    if (typeof window !== 'undefined') {
        // @ts-ignore this is for debugging
        window.nd = {
            router: appRouter,
            cache,
            tree
        };
    }
    const onPopState = _react.default.useCallback(({ state  })=>{
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // TODO-APP: this case happens when pushState/replaceState was called outside of Next.js or when the history entry was pushed by the old router.
        // It reloads the page in this case but we might have to revisit this as the old router ignores it.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        _react.default.startTransition(()=>{
            dispatch({
                type: 'restore',
                payload: {
                    url: new URL(window.location.href),
                    tree: state.tree
                }
            });
        });
    }, []);
    _react.default.useEffect(()=>{
        window.addEventListener('popstate', onPopState);
        return ()=>{
            window.removeEventListener('popstate', onPopState);
        };
    }, [
        onPopState
    ]);
    return /*#__PURE__*/ _react.default.createElement(_hooksClientContext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksClientContext.QueryContext.Provider, {
        value: query
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.FullAppTreeContext.Provider, {
        value: {
            changeByServerResponse,
            tree,
            focusRef
        }
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.AppTreeContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl,
            stylesheets: initialStylesheets
        }
    }, /*#__PURE__*/ _react.default.createElement(ErrorOverlay, null, cache.subTreeData), hotReloader)))));
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function fetchFlight(url, flightRouterStateData) {
    const flightUrl = new URL(url);
    const searchParams = flightUrl.searchParams;
    searchParams.append('__flight__', '1');
    searchParams.append('__flight_router_state_tree__', flightRouterStateData);
    const { readable , writable  } = new TransformStream();
    fetch(flightUrl.toString()).then((res)=>{
        var ref;
        (ref = res.body) == null ? void 0 : ref.pipeTo(writable);
    });
    return readable;
}
function fetchServerResponse(url, flightRouterState) {
    const flightRouterStateData = JSON.stringify(flightRouterState);
    return (0, _reactServerDomWebpack).createFromReadableStream(fetchFlight(url, flightRouterStateData));
}
function ErrorOverlay({ children  }) {
    if (process.env.NODE_ENV === 'production') {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
    } else {
        const { ReactDevOverlay ,  } = require('next/dist/compiled/@next/react-dev-overlay/dist/client');
        return /*#__PURE__*/ _react.default.createElement(ReactDevOverlay, {
            globalOverlay: true
        }, children);
    }
}
// TODO-APP: move this back into AppRouter
let initialParallelRoutes = typeof window === 'undefined' ? null : new Map();

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=app-router.client.js.map