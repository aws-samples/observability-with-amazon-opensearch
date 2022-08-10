import { AreaChartProps } from '../interfaces';
import { ChartModel } from './index';
export default function createSeriesDecorator<T extends AreaChartProps.DataTypes>(externalSeries: readonly AreaChartProps.Series<T>[]): (series: AreaChartProps.Series<T>) => ChartModel.InternalSeries<T>;
//# sourceMappingURL=create-series-decorator.d.ts.map