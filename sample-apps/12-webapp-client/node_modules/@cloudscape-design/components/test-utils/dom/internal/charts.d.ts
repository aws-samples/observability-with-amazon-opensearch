import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ChartLegendWrapper from './chart-legend';
import ChartFilterWrapper from './chart-filter';
import ChartPopoverWrapper from './chart-popover';
export default class CommonChartWrapper extends ComponentWrapper {
    findDefaultFilter(): ChartFilterWrapper | null;
    findStatusContainer(): ElementWrapper | null;
    findLegend(): ChartLegendWrapper | null;
    findDetailPopover(): ChartPopoverWrapper | null;
}
