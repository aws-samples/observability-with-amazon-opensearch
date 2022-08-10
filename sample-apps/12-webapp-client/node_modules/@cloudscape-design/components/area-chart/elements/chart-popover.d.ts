import { AreaChartProps } from '../interfaces';
import { ChartModel } from '../model';
import { HighlightDetails } from './use-highlight-details';
export default function AreaChartPopover<T extends AreaChartProps.DataTypes>({ model, highlightDetails, dismissAriaLabel, size, }: {
    model: ChartModel<T>;
    highlightDetails: null | HighlightDetails;
    dismissAriaLabel?: string;
    size?: 'small' | 'medium' | 'large';
}): JSX.Element | null;
//# sourceMappingURL=chart-popover.d.ts.map