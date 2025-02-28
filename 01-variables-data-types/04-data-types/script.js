// String
const firstName = 'Sara';
console.log('firstName: ', firstName, typeof firstName);

// Number
const age = 30;
console.log('age: ', age, typeof age);

const temp = 98.9;
console.log('temp: ', temp, typeof temp);

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null
const aptNumber = null;
console.log('aptNumber: ', aptNumber, typeof aptNumber); // see link why null == object

// Undefined
// let score;             // undefined not assigned, explicit
const score = undefined;  // undefined can be assigned
console.log('score: ', score, typeof score);

// Symbol
const id = Symbol('id');
console.log('id: ', id, typeof id);

// BigInt
const n = 9007199254740991n;
console.log('n: ', n, typeof n);

// Reference Types
// Array
const numbers = [1, 2, 3, 4];
console.log('numbers: ', numbers, typeof numbers);

// Object
const person = {
  name: 'Brad',
};
console.log('person: ', person, typeof person);

// Function is also a reference type
function sayHello() {
  console.log('Hello');
}
console.log('sayHello: ', sayHello, typeof sayHello);

const output = sayHello;
console.log('output: ', output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
