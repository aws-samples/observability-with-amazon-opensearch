import { __assign, __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useCallback, memo } from 'react';
import InternalFormField from '../../../form-field/internal';
import InternalMultiselect from '../../../multiselect/internal';
import { getBaseProps } from '../../base-component';
import SeriesMarker from '../chart-series-marker';
import styles from './styles.css.js';
export default memo(ChartFilter);
function ChartFilter(_a) {
    var series = _a.series, i18nStrings = _a.i18nStrings, selectedSeries = _a.selectedSeries, onChange = _a.onChange, restProps = __rest(_a, ["series", "i18nStrings", "selectedSeries", "onChange"]);
    var baseProps = getBaseProps(restProps);
    var className = clsx(baseProps.className, styles.root);
    var defaultOptions = series.map(function (d, i) { return ({
        label: d.label,
        value: '' + i,
        datum: d.datum,
        __customIcon: (React.createElement("span", { className: styles['custom-icon-wrapper'] },
            React.createElement(SeriesMarker, { color: d.color, type: d.type })))
    }); });
    var selectedOptions = defaultOptions.filter(function (option) { return (selectedSeries === null || selectedSeries === void 0 ? void 0 : selectedSeries.indexOf(option.datum)) !== -1; });
    var updateSelection = useCallback(function (_a) {
        var selectedOptions = _a.detail.selectedOptions;
        var selectedSeries = defaultOptions
            .filter(function (option) { return selectedOptions.indexOf(option) !== -1; })
            .map(function (option) { return option.datum; });
        onChange(selectedSeries);
    }, [onChange, defaultOptions]);
    return (React.createElement(InternalFormField, __assign({}, baseProps, { label: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filterLabel, className: className }),
        React.createElement(InternalMultiselect, { placeholder: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filterPlaceholder, options: defaultOptions, selectedOptions: selectedOptions, onChange: updateSelection, className: styles['chart-filter'], selectedAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filterSelectedAriaLabel, hideTokens: true })));
}
//# sourceMappingURL=index.js.map