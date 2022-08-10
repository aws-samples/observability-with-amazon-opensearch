import { CartesianChartProps, ChartDataTypes } from '../internal/components/cartesian-chart/interfaces';
export interface AreaChartProps<T extends AreaChartProps.DataTypes> extends CartesianChartProps<T, AreaChartProps.Series<T>> {
    /**
     * Array that represents the source of data for the displayed chart.
     * Each element can represent an area series, or a threshold, and can have the following properties:
     *
     * * `title` (string): A human-readable title for this series
     * * `type` (string): Series type (`"area"`, or `"threshold"`)
     * * `data` (Array): An array of data points, represented as objects with `x` and `y` properties. The `x` values must be consistent across all series
     * * `color` (string): (Optional) A color hex value for this series. When assigned, it takes priority over the automatically assigned color
     * * `valueFormatter` (Function): (Optional) A function that formats data values before rendering in the UI, For example, in the details popover.
     */
    series: ReadonlyArray<AreaChartProps.Series<T>>;
    /**
     * An object containing all the necessary localized strings required by the component.
     */
    i18nStrings?: AreaChartProps.I18nStrings<T>;
}
export declare namespace AreaChartProps {
    type DataTypes = ChartDataTypes;
    interface Datum<T> {
        x: T;
        y: number;
    }
    type Series<T> = AreaSeries<T> | ThresholdSeries;
    interface AreaSeries<T> {
        type: 'area';
        title: string;
        color?: string;
        data: T extends unknown ? ReadonlyArray<Datum<T>> : ReadonlyArray<Datum<T>>;
        valueFormatter?: ValueFormatter<number, T>;
    }
    interface ThresholdSeries {
        type: 'threshold';
        title: string;
        color?: string;
        y: number;
        valueFormatter?: TickFormatter<number>;
    }
    type FilterChangeDetail<T> = CartesianChartProps.FilterChangeDetail<Series<T>>;
    type HighlightChangeDetail<T> = CartesianChartProps.HighlightChangeDetail<Series<T>>;
    type TickFormatter<T> = CartesianChartProps.TickFormatter<T>;
    type ValueFormatter<YType, XType = null> = CartesianChartProps.ValueFormatter<YType, XType>;
    interface I18nStrings<T> extends CartesianChartProps.I18nStrings<T> {
        /** The title of the values total in the popover. */
        detailTotalLabel?: string;
        /** Function to format the displayed values total. */
        detailTotalFormatter?: TickFormatter<number>;
    }
}
//# sourceMappingURL=interfaces.d.ts.map