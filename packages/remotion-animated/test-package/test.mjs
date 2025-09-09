// Test importing the fixed remotion-animated package as an ES module
import { Animated, Fade, Move, Scale, Size, Rotate, Ease, CustomEasing } from '../dist/index.js';

console.log('🧪 Testing remotion-animated ES module imports...\n');

// Test that all exports are functions/objects
const tests = [
  { name: 'Animated', value: Animated, expectedType: 'function' },
  { name: 'Fade', value: Fade, expectedType: 'function' },
  { name: 'Move', value: Move, expectedType: 'function' },
  { name: 'Scale', value: Scale, expectedType: 'function' },
  { name: 'Size', value: Size, expectedType: 'function' },
  { name: 'Rotate', value: Rotate, expectedType: 'function' },
  { name: 'Ease', value: Ease, expectedType: 'object' },
  { name: 'CustomEasing', value: CustomEasing, expectedType: 'function' }
];

let allPassed = true;

tests.forEach(test => {
  const actualType = typeof test.value;
  const passed = actualType === test.expectedType;
  
  if (passed) {
    console.log(`✅ ${test.name}: ${actualType} (expected ${test.expectedType})`);
  } else {
    console.log(`❌ ${test.name}: ${actualType} (expected ${test.expectedType})`);
    allPassed = false;
  }
});

console.log(`\n${allPassed ? '🎉' : '💥'} Test ${allPassed ? 'PASSED' : 'FAILED'}`);

if (allPassed) {
  console.log('All ES module imports are working correctly!');
  console.log('The remotion-animated package is now compatible with modern bundlers.');
} else {
  console.log('Some imports failed. Check the output above.');
  process.exit(1);
}
