import { Detector, Resource, ResourceDetectionConfig } from '..';
/**
 * BrowserDetector will be used to detect the resources related to browser.
 */
declare class BrowserDetector implements Detector {
    detect(config?: ResourceDetectionConfig): Promise<Resource>;
    /**
     * Validates process resource attribute map from process variables
     *
     * @param browserResource The un-sanitized resource attributes from process as key/value pairs.
     * @param config: Config
     * @returns The sanitized resource attributes.
     */
    private _getResourceAttributes;
}
export declare const browserDetector: BrowserDetector;
export {};
//# sourceMappingURL=BrowserDetector.d.ts.map