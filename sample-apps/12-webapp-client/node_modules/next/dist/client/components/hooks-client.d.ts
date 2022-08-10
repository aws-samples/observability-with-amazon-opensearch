export declare function useSearchParams(): import("../../server/request-meta").NextParsedUrlQuery;
export declare function useSearchParam(key: string): string | string[];
export declare function useRouter(): import('../../shared/lib/app-router-context').AppRouterInstance;
export declare function usePathname(): string;
export declare function useSelectedLayoutSegment(parallelRouteKey?: string): string;
