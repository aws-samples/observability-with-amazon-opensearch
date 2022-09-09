/**
 * @param containerRef ref to surrounding container with sticky element
 * @param stickyRef ref to sticky element scrolled inside of containerRef
 * @param containerOffset offset between header and container
 *                        originating borders or paddings
 */
export default function stickyScrolling(containerRef: React.MutableRefObject<HTMLElement | null>, stickyRef: React.MutableRefObject<HTMLElement | null>): {
    scrollToTop: () => void;
    scrollToItem: (item: HTMLElement | null) => void;
};
/**
 * Calculates the scrolling offset between container and
 * sticky element with container offset caused by border
 * or padding
 * @param container
 * @param sticky element inside of container
 * @param containerOffset caused by borders or paddings
 */
export declare function calculateScrollingOffset(container: HTMLElement, sticky: HTMLElement): number;
/**
 * Scrolls suitable parent of container up by amount of pixels
 * @param amount pixels to be scrolled up
 * @param container used to determine next parent element for scrolling
 */
export declare function scrollUpBy(amount: number, container: HTMLElement): void;
//# sourceMappingURL=sticky-scrolling.d.ts.map