import { Resource } from './Resource';
import { ResourceDetectionConfig } from './config';
/** Interface for Resource attributes  */
export interface ResourceAttributes {
    [key: string]: number | string | boolean;
}
/**
 * Interface for a Resource Detector. In order to detect resources in parallel
 * a detector returns a Promise containing a Resource.
 */
export interface Detector {
    detect(config?: ResourceDetectionConfig): Promise<Resource>;
}
//# sourceMappingURL=types.d.ts.map