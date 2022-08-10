import type { CacheNode } from '../../shared/lib/app-router-context';
import type { FlightRouterState, FlightData } from '../../server/app-render';
declare type PushRef = {
    pendingPush: boolean;
    mpaNavigation: boolean;
};
export declare type FocusRef = {
    focus: boolean;
};
declare type AppRouterState = {
    tree: FlightRouterState;
    cache: CacheNode;
    pushRef: PushRef;
    focusRef: FocusRef;
    canonicalUrl: string;
};
export declare function reducer(state: AppRouterState, action: {
    type: 'reload';
    payload: {
        url: URL;
        cache: CacheNode;
        mutable: {
            previousTree?: FlightRouterState;
            patchedTree?: FlightRouterState;
        };
    };
} | {
    type: 'navigate';
    payload: {
        url: URL;
        cacheType: 'soft' | 'hard';
        navigateType: 'push' | 'replace';
        cache: CacheNode;
        mutable: {
            previousTree?: FlightRouterState;
            patchedTree?: FlightRouterState;
        };
    };
} | {
    type: 'restore';
    payload: {
        url: URL;
        tree: FlightRouterState;
    };
} | {
    type: 'server-patch';
    payload: {
        flightData: FlightData;
        previousTree: FlightRouterState;
        cache: CacheNode;
    };
}): AppRouterState;
export {};
