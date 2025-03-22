const con = document.getElementById("console");
con.innerHTML=`
<pre>
console.log(20, 'Hello', true);
</pre>
`;

const tab = document.getElementById("table");
tab.innerHTML = `
<pre>
console.table({
  name: 'John',
  email: 'john@not.gmail.com'
});

<img src="console-table.png" alt="console.table example" width="400">
</pre>`;

const cmnt = document.getElementById("cmnt");
cmnt.innerHTML=`
<pre>
// single line comment

/*
multi
line
comment
*/
</pre>
`;

const vars = document.getElementById("vars");
vars.innerHTML=`
<pre>
Naming Conventions
- Only letters, numbers, underscores and dollar signs
- Can't start with a number

Multi-Word Formatting
- firstName  = camelCase
- first_name = underscore
- FirstName  = PascalCase
- firstname  = lowercase

Declaring Variables
var morph   = 10;           // morph can be redeclared
let leaveMe = 20;           // leaveMe cannot be redeclared
const noChangeAllowed = 30; // noChangeAllowed cannot be assigned another value once assigned
</pre>
`;

const dtypes = document.getElementById("dtypes");
dtypes.innerHTML = `
<pre>
Data Types
- String        -> const band = "The Beatles";
- Number        -> const year = 2025; 
                   const pi = 3.1416;
- Boolean       -> const yes = true; 
                   const no = false;
- Null          -> const knull = null;
- Undefined     -> const whereAmI;
- Symbol        -> const id = Symbol(id);
- BigInt        -> const n = 9007199254740991n;
- Array         -> const numbers = [1, 2, 3, 4];
- Object        -> const person = { name: 'Brad' };
- Function      -> function sayHello() { console.log('Hello'); }
</pre>
`;

const sh = document.getElementById("stackheap");
sh.innerHTML=`
<pre>
Primitive data types are stored in the "stack"
<i>String | Number | Boolean | Null | Undefined | Symbol | BigInt</i>

Reference types are stored in the "heap" and accessed by reference
<i>Arrays | Functions | Objects</i>
</pre>
`;

const conv = document.getElementById("conversion");
conv.innerHTML=`
<pre>
let amount = '100';
parseInt(amount);
Number(amount)

amount = 100;
amount.toString();
String(amount);

amount = '99.5';
parseFloat(amount);

amount = 1;
Boolean(amount)

amount = 0;
Boolean(amount)
</pre>
`;