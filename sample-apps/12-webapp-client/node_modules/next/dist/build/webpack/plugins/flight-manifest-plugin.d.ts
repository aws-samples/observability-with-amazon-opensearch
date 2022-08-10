/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { webpack5 } from 'next/dist/compiled/webpack/webpack';
declare type Options = {
    dev: boolean;
    appDir: boolean;
    pageExtensions: string[];
};
export declare class FlightManifestPlugin {
    dev: boolean;
    pageExtensions: string[];
    appDir: boolean;
    constructor(options: Options);
    apply(compiler: any): void;
    createAsset(assets: any, compilation: webpack5.Compilation, context: string): void;
}
export {};
