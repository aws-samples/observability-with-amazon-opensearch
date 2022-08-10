import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import { AnnotationWrapper } from '../index.js';
export default class HotspotWrapper extends ComponentWrapper {
    static rootSelector: string;
    findTrigger(): ElementWrapper;
    findAnnotation(): AnnotationWrapper;
}
