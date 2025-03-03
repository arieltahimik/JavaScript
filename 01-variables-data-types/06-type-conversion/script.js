
// Convert string to number
let amount = '100';
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

console.log(parseInt(amount), typeof parseInt(amount));
console.log(+amount, typeof +amount);
console.log(Number(amount), typeof Number(amount));

/**
Side Note:
amount = 100, amount is a Primitive Type and has no functions/methods
amount.toString(), so why does this work (.toString())
It's because Javascript automatically creates a temporary wrapper of the appropriate object type
String / Number / Boolean / Symbol class wrappers
*/

// Convert number to string
amount = 100;
// amount = amount.toString();
// amount = String(amount);

console.log(amount.toString(), typeof amount.toString());
console.log(String(amount), typeof String(amount));

// Convert string to decimal
amount = '99.5';
// amount = parseFloat(amount);
console.log(parseFloat(amount), typeof parseFloat(amount));

// Convert number to boolean
amount = 1;
amount = Boolean(amount);
console.log(amount, typeof amount);

amount = 0;
console.log(Boolean(amount), typeof Boolean(amount));

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

