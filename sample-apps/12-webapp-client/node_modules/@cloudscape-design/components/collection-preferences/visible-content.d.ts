import { CollectionPreferencesProps } from './interfaces';
interface VisibleContentPreferenceProps extends CollectionPreferencesProps.VisibleContentPreference {
    onChange: (value: ReadonlyArray<string>) => void;
    value?: ReadonlyArray<string>;
}
export default function VisibleContentPreference({ title, options, value, onChange, }: VisibleContentPreferenceProps): JSX.Element;
export {};
//# sourceMappingURL=visible-content.d.ts.map