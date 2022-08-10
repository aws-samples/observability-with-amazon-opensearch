// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState } from 'react';
import { useStableEventHandler } from '../../internal/hooks/use-stable-event-handler';
import { makeCancellable, PromiseCancelledSignal } from '../../internal/utils/promises';
import { extractBucketName, validate } from './validation';
export function useVersionsFetch(fetchVersions) {
    var _a = useState(false), loading = _a[0], setLoading = _a[1];
    var _b = useState(''), lastFetchedValue = _b[0], setLastFetched = _b[1];
    var _c = useState([]), versions = _c[0], setVersions = _c[1];
    var loadVersions = function (uri) {
        if (uri === lastFetchedValue) {
            return;
        }
        setLastFetched(uri);
        var errorCode = validate(uri);
        var _a = extractBucketName(uri), bucketName = _a[0], prefix = _a[1];
        if (errorCode || !bucketName || !prefix || prefix.slice(-1) === '/') {
            return;
        }
        setLoading(true);
        var result = makeCancellable(fetchVersions(bucketName, prefix));
        result.promise.then(function (versions) {
            setLoading(false);
            setVersions(versions.map(function (version) { return ({
                value: version.VersionId,
                label: version.LastModified
            }); }));
        }, function (err) {
            if (!(err instanceof PromiseCancelledSignal)) {
                setLoading(false);
            }
        });
        return result;
    };
    return {
        loading: loading,
        versions: versions,
        resetVersions: function () { return setVersions([]); },
        // this function is a dependency of useEffect
        loadVersions: useStableEventHandler(loadVersions)
    };
}
//# sourceMappingURL=use-versions-fetch.js.map