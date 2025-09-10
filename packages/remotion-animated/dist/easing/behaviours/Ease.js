import { Easing } from 'remotion';
import CustomEasing from './CustomEasing.js';
// We intentionally don't call this namespace `Easing` to avoid conflicts with
// Remotion's `Easing` module when package users attempt to import it.
/**
 * A library of easing behaviours that can be used in the `easing` option of
 * animations in Remotion Animated.
 */
var Ease;
(function (Ease) {
    Ease.Linear = CustomEasing(Easing.linear);
    Ease.QuadraticIn = CustomEasing(Easing.in(Easing.quad));
    Ease.QuadraticOut = CustomEasing(Easing.out(Easing.quad));
    Ease.QuadraticInOut = CustomEasing(Easing.inOut(Easing.quad));
    Ease.CubicIn = CustomEasing(Easing.in(Easing.cubic));
    Ease.CubicOut = CustomEasing(Easing.out(Easing.cubic));
    Ease.CubicInOut = CustomEasing(Easing.inOut(Easing.cubic));
    Ease.QuarticIn = CustomEasing(Easing.in(Easing.poly(4)));
    Ease.QuarticOut = CustomEasing(Easing.out(Easing.poly(4)));
    Ease.QuarticInOut = CustomEasing(Easing.inOut(Easing.poly(4)));
    Ease.QuinticIn = CustomEasing(Easing.in(Easing.poly(5)));
    Ease.QuinticOut = CustomEasing(Easing.out(Easing.poly(5)));
    Ease.QuinticInOut = CustomEasing(Easing.inOut(Easing.poly(5)));
    Ease.SinusoidalIn = CustomEasing(Easing.in(Easing.sin));
    Ease.SinusoidalOut = CustomEasing(Easing.out(Easing.sin));
    Ease.SinusoidalInOut = CustomEasing(Easing.inOut(Easing.sin));
    Ease.CircularIn = CustomEasing(Easing.in(Easing.circle));
    Ease.CircularOut = CustomEasing(Easing.out(Easing.circle));
    Ease.CircularInOut = CustomEasing(Easing.inOut(Easing.circle));
    Ease.ExponentialIn = CustomEasing(Easing.in(Easing.exp));
    Ease.ExponentialOut = CustomEasing(Easing.out(Easing.exp));
    Ease.ExponentialInOut = CustomEasing(Easing.inOut(Easing.exp));
    Ease.BounceIn = CustomEasing(Easing.in(Easing.bounce));
    Ease.BounceOut = CustomEasing(Easing.out(Easing.bounce));
    Ease.BounceInOut = CustomEasing(Easing.inOut(Easing.bounce));
    /**
     * Defines a custom cubic bezier curve.
     */
    Ease.Bezier = (x1, y1, x2, y2) => CustomEasing(Easing.bezier(x1, y1, x2, y2));
})(Ease || (Ease = {}));
export default Ease;
