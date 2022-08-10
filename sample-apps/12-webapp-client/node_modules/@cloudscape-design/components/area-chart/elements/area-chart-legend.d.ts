import React from 'react';
import { AreaChartProps } from '../interfaces';
import { ChartModel } from '../model';
declare const _default: typeof AreaChartLegend;
export default _default;
declare function AreaChartLegend<T extends AreaChartProps.DataTypes>({ model, legendTitle, ariaLabel, plotContainerRef, }: {
    model: ChartModel<T>;
    plotContainerRef: React.RefObject<HTMLDivElement>;
    legendTitle?: string;
    ariaLabel?: string;
}): JSX.Element;
//# sourceMappingURL=area-chart-legend.d.ts.map