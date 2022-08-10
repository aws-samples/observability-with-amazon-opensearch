declare type Options = {
    dev: boolean;
    isEdgeServer: boolean;
};
export declare const injectedClientEntries: Map<any, any>;
export declare class ClientEntryPlugin {
    dev: boolean;
    isEdgeServer: boolean;
    constructor(options: Options);
    apply(compiler: any): void;
    createClientEndpoints(compilation: any, callback: () => void): Promise<void>;
}
export {};
