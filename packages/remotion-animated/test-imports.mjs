#!/usr/bin/env node

// Test script to verify ES module imports work correctly
console.log('Testing ES module imports...');

try {
  // Import from the main entry point
  const { Animated, Fade, Move, Rotate, Scale, Size, CustomEasing, Ease } = await import('./dist/index.js');
  
  console.log('✅ Successfully imported from dist/index.js:');
  console.log('  - Animated:', typeof Animated);
  console.log('  - Fade:', typeof Fade);
  console.log('  - Move:', typeof Move);
  console.log('  - Rotate:', typeof Rotate);
  console.log('  - Scale:', typeof Scale);
  console.log('  - Size:', typeof Size);
  console.log('  - CustomEasing:', typeof CustomEasing);
  console.log('  - Ease:', typeof Ease);
  
  // Test individual imports
  const AnimatedComponent = await import('./dist/Animated.js');
  console.log('✅ Successfully imported Animated component');
  
  const FadeAnimation = await import('./dist/animations/Fade.js');
  console.log('✅ Successfully imported Fade animation');
  
  console.log('\n🎉 All ES module imports are working correctly!');
  console.log('The package has been successfully fixed for ES modules.');
  
} catch (error) {
  console.error('❌ Import failed:', error.message);
  process.exit(1);
}
