import { valueWithEasing } from '../easing/EasingBehaviour.js';
import interpolateAnimation from './AnimationInterpolation.js';
/**
 * The `Scale` animation scales an element horizontally, vertically or both, using a `transform`.
 */
const Scale = (options) => {
    var _a;
    return {
        in: (_a = options.start) !== null && _a !== void 0 ? _a : 0,
        valuesAt: (frame, fps) => {
            var _a, _b, _c, _d, _e, _f;
            const input = valueWithEasing(frame, fps, options);
            const initial = (_a = options.initial) !== null && _a !== void 0 ? _a : 1;
            const initialX = (_b = options.initialX) !== null && _b !== void 0 ? _b : initial;
            const initialY = (_c = options.initialY) !== null && _c !== void 0 ? _c : initial;
            const initialZ = (_d = options.initialZ) !== null && _d !== void 0 ? _d : initial;
            const scaleX = interpolateAnimation(input, (_e = options.x) !== null && _e !== void 0 ? _e : options.by, initialX);
            const scaleY = interpolateAnimation(input, (_f = options.y) !== null && _f !== void 0 ? _f : options.by, initialY);
            const scaleZ = interpolateAnimation(input, options.z, initialZ);
            return { scaleX, scaleY, scaleZ };
        },
    };
};
export default Scale;
