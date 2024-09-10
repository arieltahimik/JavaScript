/*
 * PRIMITIVE DATA TYPES
 * String - practically has an unlimited number of combinations of characters
 * Number - wide range of numbers, limited to Javascript's calculation capabilities
 * Boolean - true, false
 * Null - the absence of a value
 * Undefined - a variable not yet assigned a value
 * BigInt - accomodates a greater range of numbers than the Number data type
 * Symbol - a data type used as a unique identifier
*/


/*
 * ARITHMETIC OPERATORS
     = assignment
     + addition
     - subtraction
     / division
     * multiplication
     % modulus (remainder)
    ** exponentiation
    () group, order of operation
*/

/*
 * COMPARISON OPERATORS
    > greater than
    < less than
    == equalto
    != not equal to
*/

/*
 * LOGICAL OPERATORS
&& (AND Checks for both conditions to be true)
|| ( OR Checks for at least ONE condition to be true)
 ! (NOT Returns false if the result is true, vv)
*/


// EXAMPLES (Arithmetic and Logical Operators)
console.log(2 + 2);
console.log(1 + 2 + 3 + 4 + 5);
console.log(20 - 18);
console.log(2 * 3);
console.log(8 / 4);
console.log(3 > 2);
console.log(2 > 3);
console.log(10 == 10);
console.log(10 != 10);
console.log(100 == '100');  // true
console.log(100 === '100'); // false

/* NUMBER DATA TYPE
- Foundational data type that represents integers and decimal points
*/
console.log(123);
console.log(123.456);
console.log(10 ** 2);
console.log(9 % 8);
console.log(16 % 8);
console.log(2*4+8);
console.log(2*(4+8));


/* STRING DATA TYPE
- A collection of characters enclosed in single quotes or double quotes
*/

console.log(''); // empty string
console.log(""); // empty string
console.log('Hello there!');
console.log('Hello there!123');

/*
'hello       // error, missing end quote
"hello       // error, missing end double-quote
'It's a win' // error, avoid nested quotes
"It's a win" // good, proper termination
'He said, "hello", to me' // good, proper termination
*/


/* BOOLEAN DATA TYPE
- used to determine if a statement is true or false
*/

console.log(1 < 2);  // true
console.log(1 > 2);  // false
console.log(1 == 2); // false
console.log(100 == "100");  // true, compare value only (Coersion)
console.log(100 === "100"); // false, compare value AND data type
console.log(1 != 1);    // false
console.log(1 != "1");  // false
console.log(1 !== "1"); // true


var petDog = 'Rex';
var petCat = 'Pepper';
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: " + petDog);
console.log("My pet cat's name is: " + petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petDog, "says", dogSound);
console.log(petCat, "says",catSound);
catSound = 'meow';
console.log(petCat,"now says", catSound);


// Using typeof
var test = typeof('what is this?'); 
console.log(test);

var test = typeof(10); 
console.log(test);

var test = typeof(3.14); 
console.log(test);

var test = typeof(true); 
console.log(test);

var test = typeof(false); 
console.log(test);

var test = typeof(1 < 2); 
console.log(test);

var test = typeof([1,2,3]); 
console.log(test);

var test = typeof( {firstProperty: 1} ); 
console.log(test);

var test = typeof( function abc() { console.log('abc'); } ); 
console.log(test);


//-----------------------------------------//

/* Global Scope and Functions
 * In JavaScript, scope refers to the visibility of variables. 
 * Variables which are defined outside of a function block have Global scope. 
 * This means, they can be seen everywhere in your JavaScript code.
 * Variables which are declared without the let or const keywords are 
 * automatically created in the global scope. This can create unintended 
 * consequences elsewhere in your code or when running a function again. 
 * You should always declare your variables with let or const.
*/

// Declare the myGlobal variable below this line
const myGlobal=10; //global

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal=5; // global
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

//-----------------------------------------//