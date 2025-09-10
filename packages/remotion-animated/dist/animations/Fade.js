import { valueWithEasing } from '../easing/EasingBehaviour.js';
import interpolateAnimation from './AnimationInterpolation.js';
/**
 * The `Fade` animation animates the opacity of an element.
 */
const Fade = (options) => {
    var _a;
    const start = (_a = options.start) !== null && _a !== void 0 ? _a : 0;
    return {
        in: start,
        valuesAt: (frame, fps) => {
            var _a;
            const input = valueWithEasing(frame, fps, options);
            const initial = (_a = options.initial) !== null && _a !== void 0 ? _a : 1;
            const opacity = interpolateAnimation(input, options.to, initial, initial, true);
            return { opacity };
        },
    };
};
export default Fade;
