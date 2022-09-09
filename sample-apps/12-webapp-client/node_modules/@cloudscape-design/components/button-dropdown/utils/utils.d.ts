import { ButtonDropdownProps, LinkItem } from '../interfaces';
export declare const isItemGroup: (item: ButtonDropdownProps.ItemOrGroup) => item is ButtonDropdownProps.ItemGroup;
export declare const isLinkItem: (item: LinkItem | ButtonDropdownProps.ItemOrGroup) => item is LinkItem;
export declare const getItemTarget: (item: ButtonDropdownProps.Item) => "_blank" | undefined;
export declare function indexIncludes(source: number[], target: number[]): boolean;
export declare function indexEquals(left: number[], right: number[]): boolean;
//# sourceMappingURL=utils.d.ts.map