"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = OuterLayoutRouter;
exports.InnerLayoutRouter = InnerLayoutRouter;
var _react = _interopRequireWildcard(require("react"));
var _appRouterContext = require("../../shared/lib/app-router-context");
var _appRouterClient = require("./app-router.client");
var _matchSegments = require("./match-segments");
function OuterLayoutRouter({ parallelRouterKey , segmentPath , childProp , loading , rootLayoutIncluded  }) {
    const { childNodes , tree , url  } = (0, _react).useContext(_appRouterContext.AppTreeContext);
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    if (!childNodesForParallelRouter) {
        childNodes.set(parallelRouterKey, new Map());
        childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    }
    // This relates to the segments in the current router
    // tree[1].children[0] refers to tree.children.segment in the data format
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = Array.isArray(childProp.segment) ? childProp.segment[1] : childProp.segment;
    var ref;
    const currentChildSegment = (ref = Array.isArray(treeSegment) ? treeSegment[1] : treeSegment) != null ? ref : childPropSegment;
    const preservedSegments = [
        currentChildSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, preservedSegments.map((preservedSegment)=>{
        return /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
            loading: loading,
            key: preservedSegment
        }, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
            parallelRouterKey: parallelRouterKey,
            url: url,
            tree: tree,
            childNodes: childNodesForParallelRouter,
            childProp: childPropSegment === preservedSegment ? childProp : null,
            segmentPath: segmentPath,
            path: preservedSegment,
            isActive: currentChildSegment === preservedSegment,
            rootLayoutIncluded: rootLayoutIncluded
        }));
    }));
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
let infinitePromise;
function equalArray(a, b) {
    return a.length === b.length && a.every((val, i)=>(0, _matchSegments).matchSegment(val, b[i]));
}
function pathMatches(flightDataPath, layoutSegmentPath) {
    // The last two items are the tree and subTreeData
    const pathToLayout = flightDataPath.slice(0, -3);
    return equalArray(layoutSegmentPath, pathToLayout);
}
function createInfinitePromise() {
    if (!infinitePromise) {
        infinitePromise = new Promise(()=>{
        // Note: this is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
function topOfElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0;
}
function InnerLayoutRouter({ parallelRouterKey , url , childNodes , childProp , segmentPath , tree , // isActive,
path , rootLayoutIncluded  }) {
    const { changeByServerResponse , tree: fullTree , focusRef ,  } = (0, _react).useContext(_appRouterContext.FullAppTreeContext);
    const focusAndScrollRef = (0, _react).useRef(null);
    (0, _react).useEffect(()=>{
        if (focusRef.focus && focusAndScrollRef.current) {
            focusRef.focus = false;
            focusAndScrollRef.current.focus();
            // Only scroll into viewport when the layout is not visible currently.
            if (!topOfElementInViewport(focusAndScrollRef.current)) {
                focusAndScrollRef.current.scrollIntoView();
            }
        }
    }, [
        focusRef
    ]);
    let childNode = childNodes.get(path);
    if (childProp && !childNode) {
        childNodes.set(path, {
            data: null,
            subTreeData: childProp.current,
            parallelRoutes: new Map()
        });
        childProp.current = null;
        // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
        childNode = childNodes.get(path);
    }
    if (!childNode) {
        const walkAddRefetch = (segmentPathToWalk, treeToRecreate)=>{
            if (segmentPathToWalk) {
                const [segment, parallelRouteKey] = segmentPathToWalk;
                const isLast = segmentPathToWalk.length === 2;
                if (treeToRecreate[0] === segment) {
                    if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                        if (isLast) {
                            const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                            if (!subTree[2]) {
                                subTree[2] = undefined;
                            }
                            subTree[3] = 'refetch';
                            return [
                                treeToRecreate[0],
                                _extends({}, treeToRecreate[1], {
                                    [parallelRouteKey]: [
                                        ...subTree
                                    ]
                                }), 
                            ];
                        }
                        return [
                            treeToRecreate[0],
                            _extends({}, treeToRecreate[1], {
                                [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                            }), 
                        ];
                    }
                }
            }
            return treeToRecreate;
        };
        // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            '',
            ...segmentPath
        ], fullTree);
        const data = (0, _appRouterClient).fetchServerResponse(new URL(url, location.origin), refetchTree);
        childNodes.set(path, {
            data,
            subTreeData: null,
            parallelRoutes: new Map()
        });
        // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
        childNode = childNodes.get(path);
    }
    // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
    childNode = childNodes.get(path);
    if (!childNode) {
        throw new Error('Child node should always exist');
    }
    if (childNode.subTreeData && childNode.data) {
        throw new Error('Child node should not have both subTreeData and data');
    }
    if (childNode.data) {
        // TODO-APP: error case
        const flightData = childNode.data.readRoot();
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === 'string') {
            window.location.href = url;
            return null;
        }
        let fastPath = false;
        // segmentPath matches what came back from the server. This is the happy path.
        if (flightData.length === 1) {
            const flightDataPath = flightData[0];
            if (pathMatches(flightDataPath, segmentPath)) {
                childNode.data = null;
                // Last item is the subtreeData
                // TODO-APP: routerTreePatch needs to be applied to the tree, handle it in render?
                const [, /* routerTreePatch */ subTreeData] = flightDataPath.slice(-2);
                childNode.subTreeData = subTreeData;
                childNode.parallelRoutes = new Map();
                fastPath = true;
            }
        }
        if (!fastPath) {
            // For push we can set data in the cache
            // segmentPath from the server does not match the layout's segmentPath
            childNode.data = null;
            setTimeout(()=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    // TODO-APP: handle redirect
                    changeByServerResponse(fullTree, flightData);
                });
            });
            // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
            throw createInfinitePromise();
        }
    }
    // TODO-APP: double check users can't return null in a component that will kick in here
    if (!childNode.subTreeData) {
        throw createInfinitePromise();
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_appRouterContext.AppTreeContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url
        }
    }, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div
    return rootLayoutIncluded ? /*#__PURE__*/ _react.default.createElement("div", {
        ref: focusAndScrollRef
    }, subtree) : subtree;
}
function LoadingBoundary({ children , loading  }) {
    if (loading) {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, {
            fallback: loading
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=layout-router.client.js.map