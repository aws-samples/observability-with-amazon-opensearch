import React, { RefObject } from 'react';
/**
 * useScrollSync returns scroll event handler to be attached to synchronised scroll elements.
 *
 * For example
 *    const handleScroll = useScrollSync([ref1, ref2]);
 *    <div ref={ref1} onScroll={handleScroll}/>
 *    <div ref={ref2} onScroll={handleScroll}/>
 */
export declare function useScrollSync(refs: Array<RefObject<any>>, disabled?: boolean): ((event: React.UIEvent) => void) | undefined;
//# sourceMappingURL=index.d.ts.map