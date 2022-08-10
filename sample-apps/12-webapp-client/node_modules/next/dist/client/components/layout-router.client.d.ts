import React from 'react';
import type { ChildProp } from '../../server/app-render';
import type { ChildSegmentMap } from '../../shared/lib/app-router-context';
import type { FlightRouterState, FlightSegmentPath } from '../../server/app-render';
export declare function InnerLayoutRouter({ parallelRouterKey, url, childNodes, childProp, segmentPath, tree, path, rootLayoutIncluded, }: {
    parallelRouterKey: string;
    url: string;
    childNodes: ChildSegmentMap;
    childProp: ChildProp | null;
    segmentPath: FlightSegmentPath;
    tree: FlightRouterState;
    isActive: boolean;
    path: string;
    rootLayoutIncluded: boolean;
}): JSX.Element | null;
export default function OuterLayoutRouter({ parallelRouterKey, segmentPath, childProp, loading, rootLayoutIncluded, }: {
    parallelRouterKey: string;
    segmentPath: FlightSegmentPath;
    childProp: ChildProp;
    loading: React.ReactNode | undefined;
    rootLayoutIncluded: boolean;
}): JSX.Element;
