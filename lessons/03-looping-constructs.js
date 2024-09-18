// FOR LOOP
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
console.log("Go!");

console.log("\n");

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Happy New Year!");

console.log("\n");

// WHILE LOOP
let counter = 3;
while (counter > 0) {
  console.log(counter);
  // counter = counter - 1;
  counter--;
}
console.log("Go!");

console.log("\n");

var j = 10;
while (j > 0) {  
  console.log(j);
  j--;
}
console.log("Happy New Year");


console.log("\n");

// NESTED LOOPS
// Example 1
for (let year = 2023; year < 2025; year++) {
  console.log(year);
  for (let month = 6; month < 9; month++) {
    console.log("-------", month);
  }
}

// Example 2
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(
      firstNum + " times " + secondNum + " equals " + firstNum * secondNum
    );
  }
}

// Example 3
//nested loops - interesting combination
for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + " divided by " + j + " equals " + i / j);
  }
}

// Example 4 - Multiplication Table
for (var firstNum = 1; firstNum < 11; firstNum++) {
  for (var secondNum = 1; secondNum < 11; secondNum++) {
    var x = (firstNum * secondNum).toString().padStart(4, " ");
    process.stdout.write(x); // use node.js to run this
  }
  console.log("\n");
}

// Example 5 - Alphabet Card
// Run in browser dev console
var cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
  var styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}

// Exercise 1 - for if-else
for (let i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    console.log(i);
  }
}


// Exercise 2 - for switch-case
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}
