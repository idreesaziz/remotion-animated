import CustomSpring from './CustomSpring.js';
const DefaultSpring = CustomSpring({
    stiffness: 75,
    damping: 200,
    overshootClamping: true,
});
export default DefaultSpring;
