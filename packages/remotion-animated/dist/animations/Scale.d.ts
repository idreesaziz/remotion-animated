import Animation from './Animation';
import AnimationOptions from './AnimationOptions';
export type ScaleOptions = AnimationOptions & {
    /**
     * The element will be proportionately scaled from `initial` to `to` (x and y axes).
     *
     * **Examples:**
     * - `initial: 1, to: 2` means the element will scale from 1x to 2x.
     * - `initial: 0.5, to: 1` means the element will scale from half to normal size.
     */
    to?: number;
    /** The element will be scaled horizontally from initialX to x. */
    x?: number;
    /** The element will be scaled vertically from initialY to y. */
    y?: number;
    /** The element will be scaled in 3D space from initialZ to z. */
    z?: number;
    /** The proportional scale factor that is used at the start of the animation. _Defaults to `1`._ */
    initial?: number;
    /** The x scale factor that is used at the start of the animation. _Defaults to the value of `initial`._ */
    initialX?: number;
    /** The y scale factor that is used at the start of the animation. _Defaults to the value of `initial`._ */
    initialY?: number;
    /** The z scale factor that is used at the start of the animation. _Defaults to the value of `initial`._ */
    initialZ?: number;
};
/**
 * The `Scale` animation scales an element horizontally, vertically or both, using a `transform`.
 */
declare const Scale: (options: ScaleOptions) => Animation;
export default Scale;
//# sourceMappingURL=Scale.d.ts.map