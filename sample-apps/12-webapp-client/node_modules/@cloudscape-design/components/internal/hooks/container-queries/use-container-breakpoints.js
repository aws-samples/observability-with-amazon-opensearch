import { useContainerQuery } from './use-container-query';
import { getMatchingBreakpoint } from '../../breakpoints';
/**
 * Re-renders the component when the breakpoint for the component changes. Scopes the re-renders to the specific
 * breakpoints you want to break at. "default" is always included as a fallback, so ["xs"] would trigger for
 * "default" and "xs".
 *
 * @param triggers The relevant breakpoints to trigger for.
 */
export function useContainerBreakpoints(triggers) {
    // triggers.join() gives us a stable value to use for the dependencies argument
    var triggersDep = triggers === null || triggers === void 0 ? void 0 : triggers.join();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useContainerQuery(function (rect) { return getMatchingBreakpoint(rect.width, triggers); }, [triggersDep]);
}
//# sourceMappingURL=use-container-breakpoints.js.map