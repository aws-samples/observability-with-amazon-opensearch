import { GridProps } from '../grid/interfaces';
interface FormFieldIds {
    label?: string;
    description?: string;
    constraint?: string;
    error?: string;
}
export declare function getSlotIds(formFieldId: string, label?: React.ReactNode, description?: React.ReactNode, constraintText?: React.ReactNode, errorText?: React.ReactNode): FormFieldIds;
export declare function getAriaDescribedBy({ error, description, constraint }: FormFieldIds): string | undefined;
export declare function getGridDefinition(stretch: boolean, secondaryControlPresent: boolean, isRefresh: boolean): {
    colspan: GridProps.BreakpointMapping | number;
}[];
export {};
//# sourceMappingURL=util.d.ts.map