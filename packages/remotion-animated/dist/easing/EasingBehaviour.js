import DefaultSpring from './behaviours/DefaultSpring.js';
export const easingForOptions = (options, defaultingTo = DefaultSpring) => {
    if ('ease' in options && typeof options.ease === 'function')
        return options.ease;
    return defaultingTo;
};
export const valueWithEasing = (frame, fps, options, defaultingTo = DefaultSpring) => {
    const easingFunction = easingForOptions(options, defaultingTo);
    const value = easingFunction(frame, fps, options);
    if (value.driver === undefined) {
        // The user may have provided a Remotion easing function from the Easing module.
        throw new TypeError('Easing function must return a driver value. You may have imported an easing function from Remotion directly, rather than from the `Ease` collection of `remotion-animated`. If you intended to use a Remotion easing function directly, wrap it with the `CustomEasing` function first.');
    }
    return value.driver;
};
