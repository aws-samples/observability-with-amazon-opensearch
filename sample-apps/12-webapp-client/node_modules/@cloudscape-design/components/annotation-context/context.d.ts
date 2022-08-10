import React from 'react';
import { HotspotProps } from '../hotspot/interfaces';
import { AnnotationContextProps } from './interfaces';
export interface HotspotContext {
    getContentForId(id: string, direction: HotspotProps['direction']): JSX.Element | null;
    registerHotspot(id: string): void;
    unregisterHotspot(id: string): void;
    currentStepIndex: number;
    currentTutorial: AnnotationContextProps.Tutorial | null;
    onStartTutorial: AnnotationContextProps['onStartTutorial'];
    onExitTutorial: AnnotationContextProps['onExitTutorial'];
}
export declare const hotspotContext: React.Context<HotspotContext>;
//# sourceMappingURL=context.d.ts.map