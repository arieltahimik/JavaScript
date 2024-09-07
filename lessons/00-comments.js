// SINGLE-LINE COMMENT

// Prints 5 to the console
console.log(5);

console.log(5); // Prints 5

// String spaces
console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'
console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'


/*
 MULTI-LINE COMMENT
*/

/*  
Place the code below outside the comment to run it.
console.log('Hello World')
*/

console.log(/* IGNORED! */ 5); // Still prints 5


// JSDoc COMMENT
/**
 * Calculates the area of a rectangle
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @returns {number} - The area of the rectangle
 */
function calculateArea(length, width) {
  return length * width;
}

console.log('Area: ', calculateArea(8,5))