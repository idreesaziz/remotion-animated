import { valueWithEasing } from '../easing/EasingBehaviour.js';
import interpolateAnimation from './AnimationInterpolation.js';
/**
 * The `Move` animation translates an element horizontally, vertically or both.
 */
const Move = (options) => {
    var _a;
    return {
        in: (_a = options.start) !== null && _a !== void 0 ? _a : 0,
        valuesAt: (frame, fps) => {
            const input = valueWithEasing(frame, fps, options);
            const translateX = interpolateAnimation(input, options.x, options.initialX);
            const translateY = interpolateAnimation(input, options.y, options.initialY);
            const translateZ = interpolateAnimation(input, options.z, options.initialZ);
            return { translateX, translateY, translateZ };
        },
    };
};
export default Move;
