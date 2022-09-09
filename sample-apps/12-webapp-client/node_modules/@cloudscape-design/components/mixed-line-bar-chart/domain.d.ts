import { InternalChartSeries, ScaleType } from './interfaces';
export declare function computeDomainX<T>(series: readonly InternalChartSeries<T>[], xScaleType: ScaleType): T[];
export declare function computeDomainY<T>(series: readonly InternalChartSeries<T>[], scaleType: 'linear' | 'log', stackedBars: boolean): number[];
//# sourceMappingURL=domain.d.ts.map