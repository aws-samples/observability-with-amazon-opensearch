import React from 'react';
import { S3ResourceSelectorProps } from '../interfaces';
interface S3InContextProps {
    i18nStrings: S3ResourceSelectorProps.I18nStrings | undefined;
    resource: S3ResourceSelectorProps.Resource;
    viewHref: string | undefined;
    invalid: boolean | undefined;
    inputAriaDescribedby: string | undefined;
    selectableItemsTypes: S3ResourceSelectorProps['selectableItemsTypes'];
    fetchVersions: S3ResourceSelectorProps['fetchVersions'];
    onBrowse: () => void;
    onChange: (newResource: S3ResourceSelectorProps.Resource, errorText: string | undefined) => void;
}
export interface S3InContextRef {
    focus(): void;
}
export declare const S3InContext: React.ForwardRefExoticComponent<S3InContextProps & React.RefAttributes<S3InContextRef>>;
export {};
//# sourceMappingURL=index.d.ts.map