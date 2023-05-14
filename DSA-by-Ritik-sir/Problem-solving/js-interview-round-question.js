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

// Implementation

var binarySearch = function(array, value) {
	
    var guess,
        min = 0,
        max = array.length - 1;	

    while(min <= max){
        guess = Math.floor((min + max) /2);
	if(array[guess] === value)
	    return guess;
	else if(array[guess] < value)
	    min = guess + 1;
	else
	    max = guess - 1;	
     }
	
     return -1;
}





// Q7:   Explain what is Linear (Sequential) Search and when may we use one? 
// Ans-

// Linear (sequential) search goes through all possible elements in some array and compare each one with the desired element. It may take
//  up to O(n) operations, where N is the size of an array and is widely considered to be horribly slow. In linear search when you perform 
//  one operation you reduce the size of the problem by one (when you do one operation in binary search you reduce the size of the problem
//  by half). Despite it, it can still be used when:

// You need to perform this search only once,
// You are forbidden to rearrange the elements and you do not have any extra memory,
// The array is tiny, such as ten elements or less, or the performance is not an issue at all,
// Even though in theory other search algorithms may be faster than linear search (for instance binary search), in practice even on medium-sized arrays (around 100 items or less) it might be infeasible to use anything else. On larger arrays, it only makes sense to use other, faster search methods if the data is large enough, because the initial time to prepare (sort) the data is comparable to many linear searches,
// When the list items are arranged in order of decreasing probability, and these probabilities are geometrically distributed, the cost of linear search is only O(1)
// You have no idea what you are searching.

// When you ask MySQL something like SELECT x FROM y WHERE z = t, and z is a column without an index, linear search is performed with all the consequences of it. This is why adding an index to searchable columns is important.


// Implementation

function linearSearch(array, toFind){
	
	for(let i = 0; i < array.length; i++){
	  if(array[i] === toFind) return i;
	}
	return -1;
  }




//Q8:Explain Values and Types in JavaScript  
// Ans-

// JavaScript has typed values, not typed variables. The following built-in types are available:
// string
// number
// boolean
// null and undefined
// object
// symbol




// Q9: What is let keyword in JavaScript?  
// Ans-

// In addition to creating declarations for variables at the function level, ES6 lets you declare variables to belong to individual 
// blocks (pairs of { .. }), using the let keyword.




// Q10:Explain the same-origin policy with regards to JavaScript.  

// Ans-
// The same-origin policy prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI
//  scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on 
//  another web page through that page's Document Object Model.




// Q11:   What is the difference between == and ===?  

// Ans-
// == is the abstract equality operator while === is the strict equality operator. The == operator will compare for equality after doing 
// any necessary type conversions. The === operator will not do type conversion, so if two values are not the same type === will simply 
// return false. When using ==, funky things can happen, such as:

// code :

1 == '1';     // true
1 == [1];    // true
1 == true;   // true
0 == '';     // true
0 == '0';    // true
0 == false;  // true





// Q12:Is there anyway to force using strict mode in Node.js?

// Ans-
// you can place
//    "use strict";
// at the top of your file in node >= 0.10.7, but if you want your whole app to run in strict (including external modules) you can do this

//    node --use_strict





// Q13:   Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why 
// would you use those?

// Ans-
// The load event fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and 
// all the images, scripts, links and sub-frames have finished loading.
// The DOM event DOMContentLoaded will fire after the DOM for the page has been constructed, but do not wait for other resources to finish 
// loading. This is preferred in certain cases when you do not need the full page to be loaded before initializing.




// Q14:What is strict mode?  

// Ans-
// Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This 
// strict context prevents certain actions from being taken and throws more exceptions.

// Non-strict code...

(function(){
  "use strict";
  // Define your library strictly...
})();





// Q15:What's the difference between Host objects and Native objects?  

// Ans-
// Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, 
// RegExp, Object, Function, etc.
// Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.





// Q16:What language constructions do you use for iterating over object properties and array items?  

// Ans-
// For objects:
// for loops - for (var property in obj) { console.log(property); }. However, this will also iterate through its inherited properties,
// and you will add an obj.hasOwnProperty(property) check before using it.
// Object.keys() - Object.keys(obj).forEach(function (property) { ... }). Object.keys() is a static method that will lists all 
// enumerable properties of the object that you pass it.
// Object.getOwnPropertyNames() - Object.getOwnPropertyNames(obj).forEach(function (property) { ... }). Object.getOwnPropertyNames() 
// is a static method that will lists all enumerable and non-enumerable properties of the object that you pass it.

// For arrays:
// for loops - for (var i = 0; i < arr.length; i++). The common pitfall here is that var is in the function scope and not the block scope 
// and most of the time you would want block scoped iterator variable. ES2015 introduces let which has block scope and it is recommended 
// to use that instead. So this becomes: for (let i = 0; i < arr.length; i++).
// forEach - arr.forEach(function (el, index) { ... }). This construct can be more convenient at times because you do not have to use the
// index if all you need is the array elements. There are also the every and some methods which will allow you to terminate the iteration
// early.
// Most of the time, I would prefer the .forEach method, but it really depends on what you are trying to do. for loops allow more
// flexibility, such as prematurely terminate the loop using break or incrementing the iterator more than once per loop.





// Q17:What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

// Ans-
// Some examples of languages that compile to JavaScript include CoffeeScript, Elm, ClojureScript, PureScript, and TypeScript.
// Advantages:
// Fixes some of the longstanding problems in JavaScript and discourages JavaScript anti-patterns.
// Enables you to write shorter code, by providing some syntactic sugar on top of JavaScript, which I think ES5 lacks, but ES2015 is 
// awesome.
// Static types are awesome (in the case of TypeScript) for large projects that need to be maintained over time.

// Disadvantages:
// Require a build/compile process as browsers only run JavaScript and your code will need to be compiled into JavaScript before being 
// served to browsers.
// Debugging can be a pain if your source maps do not map nicely to your pre-compiled source.
// Most developers are not familiar with these languages and will need to learn it. There's a ramp up cost involved for your team if 
// you use it for your projects.
// Smaller community (depends on the language), which means resources, tutorials, libraries, and tooling would be harder to find.
// IDE/editor support might be lacking.
// These languages will always be behind the latest JavaScript standard.
// Developers should be cognizant of what their code is being compiled to — because that is what would actually be running, and that is 
// what matters in the end.







// Q18:Explain event bubbling and how one may prevent it  

// Ans-
// Event bubbling is the concept in which an event triggers at the deepest possible element, and triggers on parent elements in nesting 
// order. As a result, when clicking on a child element one may exhibit the handler of the parent activating.
// One way to prevent event bubbling is using event.stopPropagation() or event.cancelBubble on IE < 9.





// Q19:What does use strict do?

// Ans-
// The use strict literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript
//  code by throwing an error if a global variable is created by mistake. For example, the following program will throw an error:

// function doSomething(val) {
//   "use strict"; 
//   x = val + 10;
// }`

// It will throw an error because x was not defined and it is being set to some value in the global scope, which isn't allowed with use 
// strict The small change below fixes the error being thrown:

// function doSomething(val) {
//   "use strict"; 
//   var x = val + 10;
// }