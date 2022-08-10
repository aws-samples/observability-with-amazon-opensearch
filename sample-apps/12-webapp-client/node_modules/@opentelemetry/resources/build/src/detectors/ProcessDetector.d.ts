import { Resource } from '../Resource';
import { Detector } from '../types';
import { ResourceDetectionConfig } from '../config';
/**
 * ProcessDetector will be used to detect the resources related current process running
 * and being instrumented from the NodeJS Process module.
 */
declare class ProcessDetector implements Detector {
    detect(config?: ResourceDetectionConfig): Promise<Resource>;
    /**
     * Validates process resource attribute map from process varaibls
     *
     * @param processResource The unsantized resource attributes from process as key/value pairs.
     * @param config: Config
     * @returns The sanitized resource attributes.
     */
    private _getResourceAttributes;
}
export declare const processDetector: ProcessDetector;
export {};
//# sourceMappingURL=ProcessDetector.d.ts.map