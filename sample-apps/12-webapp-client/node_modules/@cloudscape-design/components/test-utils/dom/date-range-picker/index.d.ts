import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import SelectWrapper from '../select';
import ButtonWrapper from '../button';
import RadioGroupWrapper from '../radio-group';
import InputWrapper from '../input';
import SegmentedControlWrapper from '../segmented-control';
export default class DateRangePickerWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Alias for `findTrigger`
     * @deprecated
     */
    findLabel(): ElementWrapper;
    /**
     * Returns the trigger element that can be used to open the picker dropdown.
     */
    findTrigger(): ElementWrapper;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findDropdown(options?: {
        expandToViewport: boolean;
    }): DrpDropdownWrapper | null;
    openDropdown(): void;
}
export declare class SelectionModeSwitchWrapper extends ElementWrapper {
    /**
     * Returns the mode selector as a SegmentedControl wrapper.
     *
     * The mode selector is only rendered as a SegmentedControl on wide viewports. On narrow viewports, use `findModesAsSelect()` instead.
     */
    findModesAsSegments(): SegmentedControlWrapper;
    /**
     * Returns the mode selector as a Select wrapper.
     * The mode selector is only rendered as a Select on narrow viewports. On wide viewports, use `findModesAsSegments()` instead.
     */
    findModesAsSelect(): SelectWrapper;
}
export declare class DrpDropdownWrapper extends ComponentWrapper {
    findSelectionModeSwitch(): SelectionModeSwitchWrapper;
    findValidationError(): ElementWrapper<HTMLSpanElement> | null;
    findRelativeRangeRadioGroup(): RadioGroupWrapper | null;
    findCustomRelativeRangeDuration(): InputWrapper | null;
    findCustomRelativeRangeUnit(): SelectWrapper | null;
    findHeader(): ElementWrapper;
    findPreviousMonthButton(): ButtonWrapper;
    findNextMonthButton(): ButtonWrapper;
    /**
     * Returns a day container on the calendar.
     *
     * @param grid the calendar grid. If only one calendar grid is visible (on small screens), use `'right'`.
     * @param row 1-based row index of the day.
     * @param column 1-based column index of the day.
     */
    findDateAt(grid: 'left' | 'right', row: 1 | 2 | 3 | 4 | 5 | 6, column: 1 | 2 | 3 | 4 | 5 | 6 | 7): ElementWrapper;
    findSelectedStartDate(): ElementWrapper | null;
    findSelectedEndDate(): ElementWrapper | null;
    findStartDateInput(): InputWrapper | null;
    findStartTimeInput(): InputWrapper | null;
    findEndDateInput(): InputWrapper | null;
    findEndTimeInput(): InputWrapper | null;
    findClearButton(): ButtonWrapper | null;
    findCancelButton(): ButtonWrapper;
    findApplyButton(): ButtonWrapper;
}
