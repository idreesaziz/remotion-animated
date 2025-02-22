import { valueWithEasing } from '../easing/EasingBehaviour';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export type RotateOptions = AnimationOptions & {
  /**
   * The element will be rotated clockwise by this angle.
   *
   * **Examples:**
   * - `360` means the element will do one full clockwise rotation.
   * - `0` means the element will not rotate.
   * - `-360` means the element will do one full counter-clockwise rotation.
   */
  degrees: number;
  /** The proportional rotation angle that is used at the start of the animation. _Defaults to `0`._ */
  initial?: number;
};

/**
 * The `Rotate` animation rotates an element along the Z-axis.
 */
const Rotate = (options: RotateOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame, fps) => {
      const input = valueWithEasing(frame, fps, options);
      const initial = options.initial ?? 1;

      const rotate = interpolateAnimation(input, options.degrees, initial);
      return { rotate };
    },
  };
};

export default Rotate;
