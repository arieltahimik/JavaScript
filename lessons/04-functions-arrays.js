// DRY - Don't Repeat Yourself
// Functions

// function 1
function addTwoNums() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}

addTwoNums();

function addTwoNumbers(a,b){
    console.log(a + b);
}

addTwoNumbers(10,20);
addTwoNumbers(15,25);

// Arrays
//             0      1         2         3        4       5         6
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

// display one at a time
console.log(colors[0]);
console.log(colors[3]);
console.log(colors[6]);

console.log('\n')

//* Using function to display array content
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is equal to i
    }
}
listArrayItems(colors); //display all items in the array at once

console.log('\n')

//* function that takes an array as input and display all items of this array
//* here are my arr items with a number in front of each item
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
listArrayItems(colors);

console.log('\n')

//* To start the count from one instead of zero
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}
listArrayItems(colors);

console.log('\n')

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// I can even add one or more conditions, such as:
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
listArrayItems(colors);

console.log('\n')

// Exercise
function letterFinder(word, match) {
    for(let i=0; i<word.length; i++) {
        if (word[i]==match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}
letterFinder('test', 't');

