let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';  // replaced orange

// length is not read-only, you can change it
// fruits.length = 2;
// console.log(fruits);  // ['apple', 'grape']

fruits[3] = 'strawberry';  // added strawberry at the end (index 3)

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;
console.log(x);
