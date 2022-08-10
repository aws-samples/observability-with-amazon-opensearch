export declare function findUpUntil(node: HTMLElement, callback: (element: HTMLElement) => boolean): HTMLElement | null;
/**
 * Returns whether the browser supports CSS position sticky.
 * In our list of supported browsers, only returns false for IE11.
 */
export declare function supportsStickyPosition(): boolean;
/**
 * Returns an element that is used to position the given element.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
 */
export declare function getContainingBlock(startElement: HTMLElement): HTMLElement | null;
/**
 * Parses a CSS color value that might contain CSS Custom Properties
 * and returns a value that will be understood by the browser, no matter of support level.
 * If the browser support CSS Custom Properties, the value will be return as is. Otherwise,
 * the fallback value will be extracted and returned instead.
 */
export declare function parseCssVariable(value: string): string;
/**
 * Checks whether the given node is a parent of the other descendant node.
 * This utility is helpful when the parent might be an SVG element,
 * which doesn't have a native `contains` implementation on some browsers like IE11.
 * @param parent Parent node
 * @param descendant Node that is checked to be a descendant of the parent node
 */
export declare function nodeContains(parent: Node | null, descendant: Node | null): boolean;
/**
 * Checks whether the given node is a descendant of a container.
 * @param container Container node
 * @param node Node that is checked to be a descendant of the container
 */
export declare function containsOrEqual(container: Node | null, node: Node): boolean;
//# sourceMappingURL=dom.d.ts.map