// Q1:   What is typeof operator? 
// Ans-
// JavaScript provides a typeof operator that can examine a value and tell you what type it is:

var a;
console.log(typeof a);				// "undefined"

a = "hello world";
console.log(typeof a);				// "string"

a = 42;
console.log(typeof a);				// "number"

a = true;
console.log(typeof a);				// "boolean"

a = null;
console.log(typeof a);				// "object" -- weird, bug

a = undefined;
console.log(typeof a);			// "undefined"

a = { b: "c" };
console.log(typeof a);				// "object"





// Q2:   What is the object type?  
// Ans-
// The object type refers to a compound value where you can set properties (named locations) that each hold their own values of any type.
var obj = {
	a: "hello world", 
	b: 42,
	c: true
};

obj.a;		// "hello world", accessed with doted notation
obj.b;		// 42
obj.c;		// true

obj["a"];	// "hello world", accessed with bracket notation
obj["b"];	// 42
obj["c"];	// true



// Q3:   Explain arrays in JavaScript  
// Ans-
// An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed 
// positions:

var arr = ["hello world",42,true];

arr[0];			//output: "hello world"
arr[1];			//output: 42
arr[2];			//output: true
arr.length;		//output: 3

typeof arr;		//output: "object"



// Q4:   What is Scope in JavaScript? 
// Ans-

// In JavaScript, each function gets its own scope. Scope is basically a collection of variables as well as the rules for how those 
// variables are accessed by name. Only code inside that function can access that function's scoped variables.
//          A variable name has to be unique within the same scope. A scope can be nested inside another scope. If one scope is nested 
// inside another, code inside the innermost scope can access variables from either scope.



// Q5:   Explain equality in JavaScript 
// // Ans-
// JavaScript has both strict and type–converting comparisons:
// Strict comparison (e.g., ===) checks for value equality without allowing coercion
// Abstract comparison (e.g. ==) checks for value equality with coercion allowed

var a = "42";
var b = 42;

a == b;			// true
a === b;		// false

// Some simple equalityrules:
// If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.
// If either value in a comparison could be of these specific values (0, "", or [] -- empty array), avoid == and use ===.
// In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves 
// readability.




// Q6:   Explain what is Binary Search
// Ans-

// When the list is sorted we can use the binary search (also known as half-interval search, logarithmic search, or binary chop) technique
// to find items on the list. Here's a step-by-step description of using binary search:
// Let min = 1 and max = n.
// Guess the average of max and min rounded down so that it is an integer.
// If you guessed the number, stop. You found it!
// If the guess was too low, set min to be one larger than the guess.
// If the guess was too high, set max to be one smaller than the guess.
// Go back to step two.


