interface ListItem {
    type?: string;
}
interface TestIndexes {
    throughIndex?: number;
    groupIndex?: number;
    inGroupIndex?: number;
}
export declare const getTestOptionIndexes: <T extends ListItem>(item: T) => TestIndexes | undefined;
export declare const generateTestIndexes: <T extends ListItem>(filteredItems: readonly T[], getParentGroup: (item: T) => T | undefined) => void;
export {};
//# sourceMappingURL=test-indexes.d.ts.map