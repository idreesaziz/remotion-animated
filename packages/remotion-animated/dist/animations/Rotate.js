import { valueWithEasing } from '../easing/EasingBehaviour.js';
import interpolateAnimation from './AnimationInterpolation.js';
/**
 * The `Rotate` animation rotates an element along the Z-axis.
 */
const Rotate = (options) => {
    var _a;
    return {
        in: (_a = options.start) !== null && _a !== void 0 ? _a : 0,
        valuesAt: (frame, fps) => {
            var _a, _b, _c;
            const input = valueWithEasing(frame, fps, options);
            const initialX = (_a = options.initialX) !== null && _a !== void 0 ? _a : 0;
            const initialY = (_b = options.initialY) !== null && _b !== void 0 ? _b : 0;
            const initialZ = (_c = options.initial) !== null && _c !== void 0 ? _c : 0;
            const rotateX = interpolateAnimation(input, options.degreesX, initialX);
            const rotateY = interpolateAnimation(input, options.degreesY, initialY);
            const rotateZ = interpolateAnimation(input, options.degrees, initialZ);
            return { rotateX, rotateY, rotateZ };
        },
    };
};
export default Rotate;
