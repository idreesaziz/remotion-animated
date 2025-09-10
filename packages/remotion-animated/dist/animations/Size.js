import { valueWithEasing } from '../easing/EasingBehaviour.js';
import interpolateAnimation from './AnimationInterpolation.js';
/**
 * The `Size` animation changes the width or height of an element.
 */
const Size = (options) => {
    var _a;
    return {
        in: (_a = options.start) !== null && _a !== void 0 ? _a : 0,
        valuesAt: (frame, fps) => {
            const values = {};
            const input = valueWithEasing(frame, fps, options);
            if (options.width)
                values.width = interpolateAnimation(input, options.width, options.initialWidth);
            if (options.height)
                values.height = interpolateAnimation(input, options.height, options.initialHeight);
            return values;
        },
    };
};
export default Size;
