/* ARROW FUNCTION by BroCodez
 * = a concise way to write function expressions
 *   good for simple functions that you use only once
 *   (parameters) => some code
 * 
 * YT: https://www.youtube.com/watch?v=fRRRkognpOs
*/

// Progression

// 1. Regular function
// function hello() {
//     console.log("Hello");
// }

// 2. Function expression
// const hello = function() {
//     console.log("Hello");
// }

// 3. Arrow function
// Sticking a function into a variable or named constant
// const hello = () => console.log("Hello");

// Running the function/expression/arrow
// hello();

// 4. Arrow function with parameter
// const hello = (name) => console.log(`Hello ${name}`);

// 5. Arrow function with parameter and multiple statements
// Enclose within curly braces
// const hello = (name) => {console.log(`Hello ${name}`);
//                          console.log(`You are old.`);}
// hello() for example 4 and 5
// hello("World");

// 6. Arrow function with multiple parameters and statements
// const hello = (name, age) => {console.log(`Hello ${name}`);
//                               console.log(`You are ${age} years old.`);}
// hello("World", 6000);


/* ========================================== */


// setTimeout Example
// setTimeOut(callback, timeInMilliseconds)

// 7. Function
// function hello() {
//     console.log("Hello");
// }

// Callback for example 7
// setTimeout(hello, 3000);

// 8. Function expression
// setTimeout(function () {
//     console.log("Hello");
// }, 3000);

// 9. Arrow function
setTimeout( () => console.log("Hello"), 3000);


/* ========================================== */


// Arrow function with map, filter

const numbers = [1,2,3,4,5,6];
console.log('numbers: ', numbers);

// Square each element of the array
const squares = numbers.map((element) => Math.pow(element, 2));
console.log('squares : ', squares);

// Cube each element of the array
const cubes   = numbers.map((element) => Math.pow(element, 3));
console.log('cubes   : ', cubes);

// Filter even numbers, no need for 'return' when only one statement
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log('evenNums: ', evenNums);

// Filter odd numbers
const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log('oddNums : ', oddNums);

// Reduce to sum of all elements
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log('total   : ', total);

// Call to setTimeout with direct parameters
setTimeout((name = 'Hitchiker', age=42) => {
    console.log(`hi there, ${name}`);
    console.log(`you are ${age} years old`);
}, 4000);