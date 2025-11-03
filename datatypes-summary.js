// primitive data types
/*
  1.string
  2.number
  3.boolean
  4.null
  5.undefined
  6.symbol
  7.bigint
*/

// non-primitive data types
/*
  1.object
  2.array  
  3.function
  */
// Note: In JavaScript, arrays and functions are technically objects, but they are often treated as distinct types due to their unique behaviors and use cases.

// Example usages:
// Primitive data types
let str = "Hello, World!"; // string
let num = 42;               // number 
let bool = true;           // boolean
let n = null;              // null
let undef;                // undefined
let sym = Symbol("id");
let bigIntNum = 9007199254740991n; // bigint

// Non-primitive data types
let obj = { name: "Alice", age: 30 }; // object
let arr = [1, 2, 3, 4, 5];              // array
function greet() {                     // function
  console.log("Hello!");
}
greet();

// Checking types
console.log(typeof str);        // "string"
console.log(typeof num);        // "number"
console.log(typeof bool);   // "boolean" 
console.log(typeof n);         // "object" (this is a known quirk in JavaScript)
console.log(typeof undef);     // "undefined"
console.log(typeof sym);       // "symbol"
console.log(typeof bigIntNum);
console.log(typeof obj);       // "object"
console.log(typeof arr);       // "object"
console.log(typeof greet);     // "function"

console.log(Array.isArray(arr)); // true
console.log(obj instanceof Object); // true
console.log(greet instanceof Function); // true
console.log(bigIntNum); // "bigint"
// Note: The typeof operator returns "object" for null, which is a historical bug in JavaScript.
console.log(typeof bigIntNum); // "bigint"

/*
    Summary:
    Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
        */