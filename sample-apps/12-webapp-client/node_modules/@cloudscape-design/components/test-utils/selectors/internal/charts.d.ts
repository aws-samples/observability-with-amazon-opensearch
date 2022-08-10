import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ChartLegendWrapper from './chart-legend';
import ChartFilterWrapper from './chart-filter';
import ChartPopoverWrapper from './chart-popover';
export default class CommonChartWrapper extends ComponentWrapper {
    findDefaultFilter(): ChartFilterWrapper;
    findStatusContainer(): ElementWrapper;
    findLegend(): ChartLegendWrapper;
    findDetailPopover(): ChartPopoverWrapper;
}
