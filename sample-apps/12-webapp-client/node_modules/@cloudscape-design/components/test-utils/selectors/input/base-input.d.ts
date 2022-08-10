import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default abstract class BaseInputWrapper extends ComponentWrapper {
    findNativeInput(): ElementWrapper;
}
