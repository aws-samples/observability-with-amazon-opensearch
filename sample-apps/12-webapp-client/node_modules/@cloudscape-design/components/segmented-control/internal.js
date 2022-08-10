import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import InternalSelect from '../select/internal';
import InternalFormField from '../form-field/internal';
import InternalSegmentedControlComponent from './internal-segmented-control';
import { getBaseProps } from '../internal/base-component';
import { fireNonCancelableEvent } from '../internal/events';
import styles from './styles.css.js';
export default function InternalSegmentedControl(_a) {
    var selectedId = _a.selectedId, options = _a.options, label = _a.label, ariaLabelledby = _a.ariaLabelledby, onChange = _a.onChange, _b = _a.__internalRootRef, __internalRootRef = _b === void 0 ? null : _b, props = __rest(_a, ["selectedId", "options", "label", "ariaLabelledby", "onChange", "__internalRootRef"]);
    var baseProps = getBaseProps(props);
    var selectOptions = (options || []).map(function (option) {
        var label = option.text || option.iconAlt;
        return __assign(__assign({}, option), { label: label, value: option.id });
    });
    var selectedOptions = selectOptions.filter(function (option) {
        return option.value === selectedId;
    });
    var currentSelectedOption = selectedOptions.length ? selectedOptions[0] : null;
    var selectProps = {
        options: selectOptions,
        selectedOption: currentSelectedOption,
        triggerVariant: 'option',
        onChange: function (event) { return fireNonCancelableEvent(onChange, { selectedId: event.detail.selectedOption.value }); }
    };
    return (React.createElement("div", __assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: __internalRootRef }),
        React.createElement(InternalSegmentedControlComponent, { selectedId: selectedId, options: options, label: label, ariaLabelledby: ariaLabelledby, onChange: onChange }),
        React.createElement("div", { className: styles.select },
            ariaLabelledby && React.createElement(InternalSelect, __assign({}, selectProps, { ariaLabelledby: ariaLabelledby })),
            !ariaLabelledby && label && (React.createElement(InternalFormField, { label: label, stretch: true },
                React.createElement(InternalSelect, __assign({}, selectProps)))),
            !ariaLabelledby && !label && React.createElement(InternalSelect, __assign({}, selectProps)))));
}
//# sourceMappingURL=internal.js.map