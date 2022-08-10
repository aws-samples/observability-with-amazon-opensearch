import React from 'react';
import type { FocusRef } from '../../client/components/reducer';
import type { FlightRouterState, FlightData } from '../../server/app-render';
export declare type ChildSegmentMap = Map<string, CacheNode>;
declare type ParallelRoutesCacheNodes = Map<string, ChildSegmentMap>;
export declare type CacheNode = {
    data: ReturnType<typeof import('../../client/components/app-router.client').fetchServerResponse> | null;
    subTreeData: null | React.ReactNode;
    parallelRoutes: ParallelRoutesCacheNodes;
};
export declare type AppRouterInstance = {
    reload(): void;
    push(href: string): void;
    softPush(href: string): void;
    replace(href: string): void;
    softReplace(href: string): void;
    prefetch(href: string): Promise<void>;
};
export declare const AppRouterContext: React.Context<AppRouterInstance>;
export declare const AppTreeContext: React.Context<{
    childNodes: CacheNode['parallelRoutes'];
    tree: FlightRouterState;
    url: string;
    stylesheets?: string[] | undefined;
}>;
export declare const FullAppTreeContext: React.Context<{
    tree: FlightRouterState;
    changeByServerResponse: (previousTree: FlightRouterState, flightData: FlightData) => void;
    focusRef: FocusRef;
}>;
export {};
