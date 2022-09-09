import React from 'react';
import { BoxProps } from '../box/interfaces';
import { ProgressBarProps } from './interfaces';
interface ProgressProps {
    value: number;
    isInFlash: boolean;
    labelId: string;
}
export declare const Progress: ({ value, isInFlash, labelId }: ProgressProps) => JSX.Element;
interface SmallTextProps {
    color?: BoxProps.Color;
    children: React.ReactNode;
}
export declare const SmallText: ({ color, children }: SmallTextProps) => JSX.Element;
interface ResultStateProps {
    isInFlash: boolean;
    resultText: React.ReactNode;
    resultButtonText?: string;
    status: ProgressBarProps.Status;
    onClick: () => void;
}
export declare const ResultState: ({ isInFlash, resultText, resultButtonText, status, onClick }: ResultStateProps) => JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map