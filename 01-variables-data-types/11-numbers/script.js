let x;

const num = new Number(555.4567);

// toString() - returns a string representation of the number
x = num.toString();

// To get the length
x = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

// toPrecision() - returns a number with the specified length
x = num.toPrecision(5);

// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(4);

// toLocaleString() - returns a string representation of the number, using the current locale
//x = num.toLocaleString('ar-EG'); // Egypt
x = num.toLocaleString('en-US');   // US

// valueOf - Get value
x = num.valueOf();

// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);
