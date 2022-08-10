import React from 'react';
import type { FlightRouterState, FlightData } from '../../server/app-render';
export declare function fetchServerResponse(url: URL, flightRouterState: FlightRouterState): {
    readRoot: () => FlightData;
};
export default function AppRouter({ initialTree, initialCanonicalUrl, initialStylesheets, children, hotReloader, }: {
    initialTree: FlightRouterState;
    initialCanonicalUrl: string;
    initialStylesheets: string[];
    children: React.ReactNode;
    hotReloader?: React.ReactNode;
}): JSX.Element;
