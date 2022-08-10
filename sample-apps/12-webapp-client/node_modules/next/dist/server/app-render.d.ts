/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from 'http';
import type { LoadComponentsReturnType } from './load-components';
import type { ServerRuntime } from './config-shared';
import React from 'react';
import { NextParsedUrlQuery } from './request-meta';
import RenderResult from './render-result';
export declare type RenderOptsPartial = {
    err?: Error | null;
    dev?: boolean;
    serverComponentManifest?: any;
    supportsDynamicHTML?: boolean;
    runtime?: ServerRuntime;
    serverComponents?: boolean;
};
export declare type RenderOpts = LoadComponentsReturnType & RenderOptsPartial;
export declare type DynamicParamTypesShort = 'c' | 'oc' | 'd';
export declare type Segment = string | [param: string, value: string, type: DynamicParamTypesShort];
export declare type FlightRouterState = [
    segment: Segment,
    parallelRoutes: {
        [parallelRouterKey: string]: FlightRouterState;
    },
    url?: string,
    refresh?: 'refetch',
    loading?: 'loading'
];
export declare type FlightSegmentPath = any[] | [
    segment: Segment,
    parallelRouterKey: string,
    segment: Segment,
    parallelRouterKey: string,
    segment: Segment,
    parallelRouterKey: string
];
export declare type FlightDataPath = any[] | [
    segment: Segment,
    parallelRoute: string,
    segment: Segment,
    parallelRoute: string,
    segment: Segment,
    parallelRoute: string,
    tree: FlightRouterState,
    subTreeData: React.ReactNode
];
export declare type FlightData = Array<FlightDataPath> | string;
export declare type ChildProp = {
    current: React.ReactNode;
    segment: Segment;
};
export declare function renderToHTML(req: IncomingMessage, res: ServerResponse, pathname: string, query: NextParsedUrlQuery, renderOpts: RenderOpts, isPagesDir: boolean): Promise<RenderResult | null>;
