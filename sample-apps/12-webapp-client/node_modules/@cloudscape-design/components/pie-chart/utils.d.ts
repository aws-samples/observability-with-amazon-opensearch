import { PieChartProps } from './interfaces';
interface Dimension {
    innerRadius: number;
    outerRadius: number;
    padding: number;
    paddingLabels: number;
    innerLabelPadding: number;
    cornerRadius?: number;
}
export declare const dimensionsBySize: Record<NonNullable<PieChartProps['size']>, Dimension>;
export declare const refreshDimensionsBySize: Record<NonNullable<PieChartProps['size']>, Dimension>;
export declare const defaultDetails: (i18nStrings: PieChartProps.I18nStrings) => (datum: PieChartProps.Datum, dataSum: number) => ({
    key: string;
    value: number;
} | {
    key: string;
    value: string;
})[];
/**
 * Adjusts the position of the given label nodes to avoid visual overlapping.
 * @param nodes List of label nodes of the entire chart (both left and right side)
 * @param markers Markers array that was calculated in <Labels>, but we just need the `endY` values
 * @param leftSide Boolean flag whether we are processing the left or right side of the chart labels
 */
export declare const balanceLabelNodes: (nodes: NodeListOf<SVGGElement>, markers: Array<{
    endY: number;
}>, leftSide: boolean) => void;
export {};
//# sourceMappingURL=utils.d.ts.map