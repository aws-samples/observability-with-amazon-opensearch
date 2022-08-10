"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FullAppTreeContext = exports.AppTreeContext = exports.AppRouterContext = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const AppRouterContext = _react.default.createContext(null);
exports.AppRouterContext = AppRouterContext;
const AppTreeContext = _react.default.createContext(null);
exports.AppTreeContext = AppTreeContext;
const FullAppTreeContext = _react.default.createContext(null);
exports.FullAppTreeContext = FullAppTreeContext;
if (process.env.NODE_ENV !== 'production') {
    AppRouterContext.displayName = 'AppRouterContext';
    AppTreeContext.displayName = 'AppTreeContext';
    FullAppTreeContext.displayName = 'FullAppTreeContext';
}

//# sourceMappingURL=app-router-context.js.map