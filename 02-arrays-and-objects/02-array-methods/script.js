let x;

const arr = [28, 38, 44, 29, 109];

// push() - Push a value on to the end of the array, returns new length
arr.push(100);  // 6, arr = [28, 38, 44, 29, 109, 100]

// pop() - Take the last value off, returns popped element
arr.pop();  // 100, arr = [28, 38, 44, 29, 109]

// unshift() - Add a value to the beginning of the array, returns new length
arr.unshift(99);  // 6, arr=[99, 28, 38, 44, 29, 109]

// shift() - Remove first value, returns removed element
arr.shift();  // 99, arr = [28, 38, 44, 29, 109]

// reverse() - Reverse an array
// arr.reverse();  // [109, 29, 44, 38, 28]

// includes() - Check to see if something is in the array, true/false
x = arr.includes(44);  // true
x = arr.includes(22);  // false

// indexOf() - Return the index of the first match, -1 false
x = arr.indexOf(44);  // 2
x = arr.indexOf(22);  // -1

// Return array as a string
x = arr.toString();  // 28,38,44,29,109
x = arr.join('-');   // 28-38-44-29-109

// slice() returns selected elements in an array, as a new array. Slice takes in the index of 
// the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);  // last index (4) exclusive (not included), [38, 44, 29]

// splice() works like slice() except it takes the index of the first element and the number 
// of elements after that as a second argument. It also mutates the original array where slice() does not
//x = arr.splice(1, 4);  // last index (4) included, [38, 44, 29, 109], arr was mutated [28]

// Remove a single element/value - The following will mutate the original array by taking out the 
// element with the index of 3. x will be equal to a new array with that plucked out value.
//x = arr.splice(3, 1);  // x=[29], arr=[28, 38, 44, 109]

// Chaining methods - Some methods can be chained depending on the return value.
// x = arr.splice(1, 4).reverse().toString().charAt(0);

x = arr.slice(1, 4).reverse().toString().charAt(0);
console.log(x,arr);

// the breakdown:
// arr.slice(1, 4)    // [38, 44, 29]
// .reverse()         // [29, 44, 38]
// .toString()        // 29,44,38
// .charAt(0)         // 2
