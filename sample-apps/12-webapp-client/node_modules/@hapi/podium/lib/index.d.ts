/**
 * Node (semi) compatible event emitter with extra features.
 */
declare class Podium {
    /**
     * Creates a new podium emitter.
     * 
     * @param events - If present, the value is passed to podium.registerEvent().
     */
    constructor(events?: Podium.Event | Podium.Event[]);

    /**
     * Register the specified events and their optional configuration. Events must be registered 
     * before they can be emitted or subscribed to. This is done to detect event name mispelling
     * and invalid event activities.
     * 
     * @param events - The event(s) to register.
     */
    registerEvent(events: Podium.Event | Podium.Event[]): void;

    /**
     * Registers another emitter as an event source for the current emitter (any event update
     * emitted by the source emitter is passed to any subscriber of the current emitter).
     * 
     * Note that any events registered with a source emitter are automatically added to the current
     * emitter. If the events are already registered, they are left as-is.
     * 
     * @param podiums - A Podium object or an array of objects, each added as a source.
     */
    registerPodium(podiums: Podium | Podium[]): void;

    /**
     * Emits an event update to all the subscribed listeners.

     * @param criteria - The event update criteria.
     * @param data - The value emitted to the subscribers.
     * 
     * @returns Promise that resolves when all events has been processed. Any errors will cause an
     * immediate rejection.
     */
    emit(criteria: string | Podium.EmitCriteria, data?: any): Promise<void>;

    /**
     * Subscribe a handler to an event.
     * 
     * @param criteria - The subscription criteria.
     * @param listener - The handler method set to receive event updates. The function signature
     *                   depends on the block, spread, and tags options.
     * @param context - Optional object that binds to the listener handler.
     *
     * @returns A reference to the current emitter.
     */
    on<TArgs extends any[] = unknown[], Tcontext extends object = this>(criteria: string | Podium.CriteriaObject, listener: Podium.Listener<Tcontext, TArgs>, context?: Tcontext): this;
    on<TArgs extends any[] = any[], Tcontext extends object = this>(criteria: string | Podium.CriteriaObject, listener: Podium.Listener<Tcontext, TArgs>, context?: Tcontext): this;

    /**
     * Subscribe a handler to an event. Same as podium.on().
     *
     * @param criteria - The subscription criteria.
     * @param listener - The handler method set to receive event updates. The function signature
     *                   depends on the block, spread, and tags options.
     * @param context - Optional object that binds to the listener handler.
     *
     * @returns A reference to the current emitter.
     */
    addListener<TArgs extends any[] = unknown[], Tcontext extends object = this>(criteria: string | Podium.CriteriaObject, listener: Podium.Listener<Tcontext, TArgs>, context?: Tcontext): this;
    addListener<TArgs extends any[] = any[], Tcontext extends object = this>(criteria: string | Podium.CriteriaObject, listener: Podium.Listener<Tcontext, TArgs>, context?: Tcontext): this;

    /**
     * Same as podium.on() with the count option set to 1.
     * 
     * Can also be called without an listener to wait for a single event.
     * 
     * @param criteria - The subscription criteria.
     * @param listener - The handler method set to receive event updates. The function signature
     *                   depends on the block, spread, and tags options.
     * @param context - Optional object that binds to the listener handler.
     *
     * @returns A reference to the current emitter.
     */
    once<TArgs extends any[] = unknown[], Tcontext extends object = this>(criteria: string | Omit<Podium.CriteriaObject, 'count'>, listener: Podium.Listener<Tcontext, TArgs>, context?: Tcontext): this;
    once<TArgs extends any[] = any[], Tcontext extends object = this>(criteria: string | Omit<Podium.CriteriaObject, 'count'>, listener: Podium.Listener<Tcontext, TArgs>, context?: Tcontext): this;

    /**
     * Wait for a single event. The count option is fixed to 1.
     * 
     * @param criteria - The subscription criteria.
     *
     * @returns Promise with array of emitted parameters.
     */
    once<TArgs extends any[] = unknown[], Tcontext extends void = void>(criteria: string | Omit<Podium.CriteriaObject, 'count'>): Promise<TArgs>;
    once<TArgs extends any[] = any[], Tcontext extends void = void>(criteria: string | Omit<Podium.CriteriaObject, 'count'>): Promise<TArgs>;

    /**
     * Removes all listeners subscribed to a given event name matching the provided listener method.
     * 
     * @param name - The event name string.
     * @param listener - The function reference provided when subscribed.
     * 
     * @returns A reference to the current emitter.
     */
    removeListener(name: string, listener: Podium.Listener): this;

    /**
     * Removes all listeners subscribed to a given event name.
     * 
     * @param name - The event name string.
     * 
     * @returns A reference to the current emitter.
     */
    removeAllListeners(name: string): this;

    /**
     * Returns whether an event has any listeners subscribed.
     * 
     * @param name  the event name string.
     * 
     * @returns true if the event name has any listeners, otherwise false.
     */
    hasListeners(name: string): boolean;
}

declare namespace Podium {

    export interface EmitCriteria { 

        /**
         * Event name.
         */
        readonly name: string;

        /**
         * Channel name.
         */
        readonly channel?: string;

        /**
         * The tags to apply.
         */
        readonly tags?: string | string[] | { [tag: string]: boolean };
    }

    export interface EventOptions {

        /**
         * Event name.
         */
        readonly name: string;

        /**
         * A string or array of strings specifying the event channels available.
         * 
         * Defaults to no channel restrictions - Event updates can specify a channel or not.
         */
        readonly channels?: string | string[];

        /**
         * Set to make podium.emit() clone the data object passed to it, before it is passed to the
         * listeners (unless an override specified by each listener).
         * 
         * Defaults to false - Data is passed as-is.
         */
        readonly clone?: boolean;

        /**
         * Set to require the data object passed to podium.emit() to be an array, and make the
         * listener method called with each array element passed as a separate argument (unless an
         * override specified by each listener).
         * 
         * This should only be used when the emitted data structure is known and predictable.
         * 
         * Defaults to false - Data is emitted as a single argument regardless of its type.
         */
        readonly spread?: boolean;

        /**
         * Set to make any tags in the critieria object passed to podium.emit() map to an object
         * (where each tag string is the key and the value is true) which is appended to the emitted
         * arguments list at the end.
         * 
         * A configuration override can be set by each listener.
         * 
         * Defaults to false.
         */
        readonly tags?: boolean;

        /**
         * Set to allow the same event name to be registered multiple times, ignoring all but the
         * first.
         * 
         * Note that if the registration config is changed between registrations, only the first
         * configuration is used.
         * 
         * Defaults to false - A duplicate registration will throw an error.
         */
        readonly shared?: boolean;
    }

    type Event = string | EventOptions | Podium;

    type Listener<TContext extends object = any, TArgs extends any[] = any[]> =
        (this: TContext, ...args: TArgs) => void | Promise<void>;

    interface CriteriaFilterOptionsObject {

        /**
         * A tag string or array of tag strings.
         */
        readonly tags?: string | string[];

        /**
         * Require all tags to be present for the event update to match the subscription.
         * 
         * Default false - Require at least one matching tag.
         */
        readonly all?: boolean;
    }

    export interface CriteriaObject {

        /**
         * Event name.
         */
        readonly name: string;

        /**
         * The event channels to subscribe to.
         * 
         * If the event registration specified a list of allowed channels, the channels array must
         * match the allowed channels. If channels are specified, event updates without any channel
         * designation will not be included in the subscription.
         * 
         * Defaults to no channels filter.
         */
        readonly channels?: string | string[];

        /**
         * Set to clone the data object passed to podium.emit() before it is passed to the listener
         * method.
         * 
         * Defaults to the event registration option (which defaults to false).
         */
        readonly clone?: boolean;

        /**
         * A positive non-zero integer indicating the number of times the listener can be called
         * after which the subscription is automatically removed.
         * 
         * Does nothing when calling once(), where it will use the value 1.
         * 
         * Defaults to no limit.
         */
        readonly count?: number;

        /**
         * The event tags (if present) to subscribe to.
         */
        readonly filter?: string | string[] | CriteriaFilterOptionsObject;

        /**
         * Override the value of spread from the event registraiont when the listener is called.
         * 
         * This should only be used when the emitted data structure is known and predictable.
         * 
         * Defaults to the event registration option (which defaults to false).
         */
        readonly spread?: boolean;

        /**
         * Override the value of tags from the event registraiont when the listener is called.
         * 
         * Defaults to the event registration option (which defaults to false).
         */
        readonly tags?: boolean;
    }
}

export = Podium;
