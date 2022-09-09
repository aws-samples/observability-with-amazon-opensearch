import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import InternalIcon from '../icon/internal';
import styles from './styles.css.js';
import useFocusVisible from '../internal/hooks/focus-visible';
import { getBaseProps } from '../internal/base-component';
import { fireCancelableEvent, isPlainLeftClick } from '../internal/events';
import useForwardFocus from '../internal/hooks/forward-focus';
import { KeyCode } from '../internal/keycode';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
var InternalLink = React.forwardRef(function (_a, ref) {
    var _b = _a.variant, variant = _b === void 0 ? 'secondary' : _b, _c = _a.fontSize, fontSize = _c === void 0 ? 'body-m' : _c, _d = _a.color, color = _d === void 0 ? 'normal' : _d, _e = _a.external, external = _e === void 0 ? false : _e, target = _a.target, href = _a.href, rel = _a.rel, ariaLabel = _a.ariaLabel, externalIconAriaLabel = _a.externalIconAriaLabel, onFollow = _a.onFollow, children = _a.children, _f = _a.__internalRootRef, __internalRootRef = _f === void 0 ? null : _f, props = __rest(_a, ["variant", "fontSize", "color", "external", "target", "href", "rel", "ariaLabel", "externalIconAriaLabel", "onFollow", "children", "__internalRootRef"]);
    checkSafeUrl('Link', href);
    var isButton = !href;
    var specialStyles = ['top-navigation', 'link', 'recovery'];
    var hasSpecialStyle = specialStyles.indexOf(variant) > -1;
    var focusVisible = useFocusVisible();
    var baseProps = getBaseProps(props);
    var anchorTarget = target !== null && target !== void 0 ? target : (external ? '_blank' : undefined);
    var anchorRel = rel !== null && rel !== void 0 ? rel : (anchorTarget === '_blank' ? 'noopener noreferrer' : undefined);
    var fireFollowEvent = function (event) {
        fireCancelableEvent(onFollow, { href: href, external: external, target: anchorTarget }, event);
    };
    var handleLinkClick = function (event) {
        if (isPlainLeftClick(event)) {
            fireFollowEvent(event);
        }
    };
    var handleButtonClick = function (event) {
        fireFollowEvent(event);
    };
    var handleButtonKeyDown = function (event) {
        if (event.keyCode === KeyCode.space || event.keyCode === KeyCode.enter) {
            event.preventDefault();
            fireFollowEvent(event);
        }
    };
    var linkRef = useRef(null);
    var isVisualRefresh = useVisualRefresh();
    useForwardFocus(ref, linkRef);
    // Visual refresh should only add styles to buttons that don't already have unique styles (e.g. primary/secondary variants)
    var applyButtonStyles = isButton && isVisualRefresh && !hasSpecialStyle;
    var sharedProps = __assign(__assign(__assign({}, focusVisible), baseProps), { 
        // https://github.com/microsoft/TypeScript/issues/36659
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref: useMergeRefs(linkRef, __internalRootRef), className: clsx(styles.link, baseProps.className, applyButtonStyles ? styles.button : null, styles[getVariantStyle(variant)], styles[getFontSizeStyle(variant, fontSize)], styles[getColorStyle(variant, color)]), 'aria-label': ariaLabel });
    var content = (React.createElement(React.Fragment, null,
        children,
        external && (React.createElement("span", { className: styles['icon-wrapper'] },
            "\u00A0",
            React.createElement("span", { className: styles.icon, "aria-label": externalIconAriaLabel, role: externalIconAriaLabel ? 'img' : undefined },
                React.createElement(InternalIcon, { name: "external", size: "inherit" }))))));
    if (isButton) {
        return (React.createElement("a", __assign({}, sharedProps, { role: "button", tabIndex: 0, onKeyDown: handleButtonKeyDown, onClick: handleButtonClick }), content));
    }
    return (
    // we dynamically set proper rel in the code above
    // eslint-disable-next-line react/jsx-no-target-blank
    React.createElement("a", __assign({}, sharedProps, { target: anchorTarget, rel: anchorRel, href: href, onClick: handleLinkClick }), content));
});
function getVariantStyle(variant) {
    return "variant-".concat(variant.replace(/^awsui-/, ''));
}
function getFontSizeStyle(variant, fontSize) {
    switch (variant) {
        case 'info':
            return 'font-size-body-s';
        case 'awsui-value-large':
            return 'font-size-display-l';
        default:
            return "font-size-".concat(fontSize);
    }
}
function getColorStyle(variant, color) {
    return "color-".concat(variant === 'info' ? 'normal' : color);
}
export default InternalLink;
//# sourceMappingURL=internal.js.map