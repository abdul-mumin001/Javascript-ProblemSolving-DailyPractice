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