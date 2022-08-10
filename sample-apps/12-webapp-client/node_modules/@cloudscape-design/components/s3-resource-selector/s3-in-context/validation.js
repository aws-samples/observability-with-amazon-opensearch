// https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html
var SCHEME = 's3://';
var BUCKET_FIRST_CHAR = /^[a-z0-9]{1}/;
var CAPITAL_LETTER = /[A-Z]/;
var DNS_NAME = /^(([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])$/;
function checkBucketNameLength(bucketName) {
    return 3 <= bucketName.length && bucketName.length <= 63;
}
export function extractBucketName(uri) {
    var _a = uri.replace(SCHEME, '').split('/'), bucketName = _a[0], rest = _a.slice(1);
    return [bucketName, rest.join('/')];
}
export function validate(uri) {
    if (uri === '') {
        return undefined;
    }
    if (uri.slice(0, SCHEME.length) !== SCHEME) {
        return 'validationPathMustBegin';
    }
    var bucketName = extractBucketName(uri)[0];
    if (!BUCKET_FIRST_CHAR.test(bucketName)) {
        return 'validationBucketLowerCase';
    }
    if (CAPITAL_LETTER.test(bucketName)) {
        return 'validationBucketMustNotContain';
    }
    if (!checkBucketNameLength(bucketName)) {
        return 'validationBucketLength';
    }
    if (!DNS_NAME.test(bucketName)) {
        return 'validationBucketMustComplyDns';
    }
    return undefined;
}
export function getErrorText(i18nStrings, errorCode) {
    return errorCode ? i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings[errorCode] : undefined;
}
//# sourceMappingURL=validation.js.map