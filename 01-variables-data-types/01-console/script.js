// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({
  name: 'John',
  email: 'john@not.gmail.com',
});

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: yellow; color: blue;';
console.log('%cHello World', styles);
