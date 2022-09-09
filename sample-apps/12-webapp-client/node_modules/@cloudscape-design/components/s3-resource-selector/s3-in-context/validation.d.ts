import { S3ResourceSelectorProps } from '../interfaces';
export declare function extractBucketName(uri: string): string[];
export declare function validate(uri: string): "validationPathMustBegin" | "validationBucketLowerCase" | "validationBucketMustNotContain" | "validationBucketLength" | "validationBucketMustComplyDns" | undefined;
export declare function getErrorText(i18nStrings: S3ResourceSelectorProps.I18nStrings | undefined, errorCode: ReturnType<typeof validate>): string | undefined;
//# sourceMappingURL=validation.d.ts.map