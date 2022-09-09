// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import InternalBox from '../box/internal';
import { InternalButton } from '../button/internal';
import InternalFormField from '../form-field/internal';
import InternalModal from '../modal/internal';
import InternalTiles from '../tiles/internal';
import InternalSpaceBetween from '../space-between/internal';
import sidePositionIconClassic from './icons/side-position';
import bottomPositionIconClassic from './icons/bottom-icon';
import sidePositionIconRefresh from './icons/side-position-refresh';
import bottomPositionIconRefresh from './icons/bottom-icon-refresh';
export default (function (props) {
    var _a = useState(props.preferences.position), position = _a[0], setPosition = _a[1];
    var onCancel = function () {
        setPosition(props.preferences.position);
        props.onDismiss();
    };
    var onConfirm = function () {
        props.onConfirm({ position: position });
    };
    return (React.createElement(InternalModal, { size: "medium", visible: props.visible, onDismiss: props.onDismiss, header: props.i18nStrings.header, closeAriaLabel: props.i18nStrings.cancel, footer: React.createElement(InternalBox, { float: "right" },
            React.createElement(InternalSpaceBetween, { direction: "horizontal", size: "xs" },
                React.createElement(InternalButton, { onClick: onCancel, formAction: "none", variant: "link" }, props.i18nStrings.cancel),
                React.createElement(InternalButton, { onClick: onConfirm, variant: "primary" }, props.i18nStrings.confirm))), __internalRootRef: props.__internalRootRef },
        React.createElement(InternalFormField, { label: props.i18nStrings.positionLabel, description: props.i18nStrings.positionDescription },
            React.createElement(InternalTiles, { onChange: function (e) { return setPosition(e.detail.value); }, value: position, columns: 2, items: [
                    {
                        label: props.i18nStrings.positionBottom,
                        image: props.isRefresh ? bottomPositionIconRefresh : bottomPositionIconClassic,
                        value: 'bottom'
                    },
                    {
                        label: props.i18nStrings.positionSide,
                        image: props.isRefresh ? sidePositionIconRefresh : sidePositionIconClassic,
                        value: 'side',
                        disabled: props.disabledSidePosition
                    },
                ] }))));
});
//# sourceMappingURL=preferences-modal.js.map