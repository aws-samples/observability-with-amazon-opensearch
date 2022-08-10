import { TutorialPanelProps } from '../../interfaces';
import { HotspotContext } from '../../../annotation-context/context.js';
export interface TutorialListProps {
    loading?: boolean;
    tutorials: TutorialPanelProps['tutorials'];
    onStartTutorial: HotspotContext['onStartTutorial'];
    filteringFunction: (tutorial: TutorialPanelProps.Tutorial, searchTerm: string) => boolean;
    i18nStrings: TutorialPanelProps['i18nStrings'];
    downloadUrl: TutorialPanelProps['downloadUrl'];
}
export default function TutorialList({ i18nStrings, tutorials, loading, onStartTutorial, downloadUrl, }: TutorialListProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map