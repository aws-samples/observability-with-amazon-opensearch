import { S3ResourceSelectorProps } from '../interfaces';
export declare function useVersionsFetch(fetchVersions: S3ResourceSelectorProps['fetchVersions']): {
    loading: boolean;
    versions: import("../../internal/components/option/interfaces").OptionDefinition[];
    resetVersions: () => void;
    loadVersions: (uri: string) => {
        promise: Promise<readonly S3ResourceSelectorProps.Version[]>;
        cancel: () => void;
        isCancelled: () => boolean;
    } | undefined;
};
//# sourceMappingURL=use-versions-fetch.d.ts.map