let x;

// Coerced to a string
x = 5 + '5';
console.log(x, typeof x);  // 55

x = 5 + Number('5');
console.log(x, typeof x);  // 10

// Coerced to a number
x = 5 * '5';
console.log(x, typeof x);  // 25

// null is coerced to 0 as it is a `falsy` value
x = 5 + null;
console.log(x, typeof x);  // 5

x = Number(null);
console.log(x, typeof x);  // 0

x = Number(true);
console.log(x, typeof x);  // 1

x = Number(false);
console.log(x, typeof x);  // 0

// true is coerced to a 1
x = 5 + true;
console.log(x, typeof x);  // 6

// false is coerced to 0 (falsy)
x = 5 + false;
console.log(x, typeof x);  // 5

// Undefined is coerced to 0 (falsy)
x = 5 + undefined;
console.log(x, typeof x);  // NaN
