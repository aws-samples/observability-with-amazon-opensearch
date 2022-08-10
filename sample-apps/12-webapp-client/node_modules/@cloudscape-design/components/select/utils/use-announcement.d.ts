import { OptionDefinition, OptionGroup } from '../../internal/components/option/interfaces';
import { SelectProps } from '../interfaces';
interface OptionHolder {
    option?: OptionDefinition | OptionGroup;
}
/**
 * The hook produces the live region string to be announced when an option is highlighted.
 * This is a workaround to account for the issues with assistive technologies.
 *
 * If the testing reveals no issues with the native announcements the live-region can be removed.
 */
export declare function useAnnouncement<Option extends OptionHolder>({ announceSelected, highlightedOption, getParent, selectedAriaLabel, renderHighlightedAriaLive, }: {
    announceSelected: boolean;
    highlightedOption?: Option;
    getParent: (option: Option) => undefined | OptionGroup;
    selectedAriaLabel?: string;
    renderHighlightedAriaLive?: SelectProps.ContainingOptionAndGroupString;
}): string;
export {};
//# sourceMappingURL=use-announcement.d.ts.map