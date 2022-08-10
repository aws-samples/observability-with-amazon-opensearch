import { KeyCode } from '../../internal/keycode';
var KEYBOARD_SINGLE_STEP_SIZE = 10;
var KEYBOARD_MULTIPLE_STEPS_SIZE = 60;
var getCurrentSize = function (splitPanelRef) {
    if (!splitPanelRef || !splitPanelRef.current) {
        return {
            splitPanelHeight: 0,
            splitPanelWidth: 0
        };
    }
    var safeParseFloat = function (size) {
        if (size === void 0) { size = ''; }
        return parseFloat(size) || 0;
    };
    return {
        splitPanelHeight: safeParseFloat(splitPanelRef.current.style.height),
        splitPanelWidth: safeParseFloat(splitPanelRef.current.style.width)
    };
};
export var useKeyboardEvents = function (_a) {
    var position = _a.position, setSidePanelWidth = _a.setSidePanelWidth, setBottomPanelHeight = _a.setBottomPanelHeight, splitPanelRef = _a.splitPanelRef;
    return function (event) {
        var setSizeFunction;
        var currentSize;
        var maxSize;
        var _a = getCurrentSize(splitPanelRef), splitPanelHeight = _a.splitPanelHeight, splitPanelWidth = _a.splitPanelWidth;
        if (position === 'side') {
            setSizeFunction = setSidePanelWidth;
            currentSize = splitPanelWidth;
            // don't need the exact max size as it's constrained in the set size function
            maxSize = window.innerWidth;
        }
        else {
            setSizeFunction = setBottomPanelHeight;
            currentSize = splitPanelHeight;
            // don't need the exact max size as it's constrained in the set size function
            maxSize = window.innerHeight;
        }
        var isEventHandled = true;
        switch (event.keyCode) {
            case KeyCode.left:
            case KeyCode.up:
                setSizeFunction(currentSize + KEYBOARD_SINGLE_STEP_SIZE);
                break;
            case KeyCode.right:
            case KeyCode.down:
                setSizeFunction(currentSize - KEYBOARD_SINGLE_STEP_SIZE);
                break;
            case KeyCode.pageUp:
                setSizeFunction(currentSize + KEYBOARD_MULTIPLE_STEPS_SIZE);
                break;
            case KeyCode.pageDown:
                setSizeFunction(currentSize - KEYBOARD_MULTIPLE_STEPS_SIZE);
                break;
            case KeyCode.home:
                setSizeFunction(maxSize);
                break;
            case KeyCode.end:
                setSizeFunction(0);
                break;
            default:
                isEventHandled = false;
        }
        if (isEventHandled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
};
//# sourceMappingURL=use-keyboard-events.js.map