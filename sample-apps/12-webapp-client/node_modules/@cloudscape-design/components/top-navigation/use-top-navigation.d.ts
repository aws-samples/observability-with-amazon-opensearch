import React from 'react';
import { TopNavigationProps } from './interfaces';
export interface UseTopNavigationParams {
    identity: TopNavigationProps['identity'];
    search: TopNavigationProps['search'];
    utilities: NonNullable<TopNavigationProps['utilities']>;
}
export interface ResponsiveState {
    hideUtilityText?: boolean;
    hideSearch?: boolean;
    hideUtilities?: number[];
    hideTitle?: boolean;
}
export interface TopNavigationSizeConfiguration {
    hasSearch: boolean;
    availableWidth: number;
    utilitiesLeftPadding: number;
    fullIdentityWidth: number;
    titleWidth: number;
    searchSlotWidth: number;
    searchUtilityWidth: number;
    utilityWithLabelWidths: number[];
    utilityWithoutLabelWidths: number[];
    menuTriggerUtilityWidth: number;
}
export interface UseTopNavigation {
    mainRef: React.Ref<HTMLDivElement>;
    virtualRef: React.Ref<HTMLDivElement>;
    responsiveState: ResponsiveState;
    breakpoint: 'default' | 'xxs' | 's';
    isSearchExpanded: boolean;
    onSearchUtilityClick: () => void;
}
export declare function useTopNavigation({ identity, search, utilities }: UseTopNavigationParams): UseTopNavigation;
/**
 * Generates the series of responsive steps that can be performed on the header in order.
 */
export declare function generateResponsiveStateKeys(utilities: ReadonlyArray<TopNavigationProps.Utility>, canHideSearch: boolean, canHideTitle: boolean): ReadonlyArray<ResponsiveState>;
/**
 * Determines the best responsive state configuration of the top navigation, based on the given list of possible responsive states
 * and the current sizes of all elements inside the navigation bar.
 */
export declare function determineBestResponsiveState(possibleStates: ReadonlyArray<ResponsiveState>, sizes: TopNavigationSizeConfiguration): ResponsiveState;
//# sourceMappingURL=use-top-navigation.d.ts.map