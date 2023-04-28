// Q1: Explain what a callback function is and provide a simple example 

// Ans-
// A callback function is a function that is passed to another function as an argument and is executed after some operation has been 
// completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.


function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
  }
  var arr = [1, 2, 3, 4, 5];

  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });



//   Q2: Given a string, reverse each word in the sentence
// Ans-

var string = "Welcome to this Javascript Guide!";
// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");
// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}



// Q3: How to check if an object is an array or not? Provide some code.

// Ans-

if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array!');
}
else{
  console.log('Not an Array!');
}



// Q4: How to empty an array in JavaScript?

// Problem
var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];

// Ans-

arrayList.length = 0;
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];   // Created array
var anotherArrayList = arrayList;    // Referenced arrayList by another variable
arrayList.length = 0;   // Empty the array by setting length to 0
console.log(anotherArrayList);   // Output []



// Q5: How would you check if a number is an integer?

// Ans-
// A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.

function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4));  // true
console.log(isInt(12.2));  // false
console.log(isInt(0.3));   // false



// Q6: Implement enqueue and dequeue using only two stacks. 
// Ans-
// Enqueue means to add an element, dequeue to remove an element.

var inputStack = [];  // First stack
var outputStack = [];  // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while(stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}


// Q7: Make this work
// Problem
// duplicate([1, 2, 3, 4, 5]); [1,2,3,4,5,1,2,3,4,5]

// Ans-
function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));  // output:  [1,2,3,4,5,1,2,3,4,5]



// Q8: Write a "mul" function which will properly when invoked as below syntax. 

// Problem
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

// Ans- 
function mul (x) {
  return function (y) {      

    return function (z) { 

      return x * y * z;
      
    };
  };
}

// Here mul function accept the first argument and return anonymous function which take the second parameter and return anonymous 
// function which take the third parameter and return multiplication of arguments which is being passed in successive




// Q9: Write a function that would allow you to do this?

// Problem
// var addSix = createBase(6);
// addSix(10);   // returns 16
// addSix(21);   // returns 27


// Ans -
// You can create a closure to keep the value passed to the function createBase even after the inner function is returned. The inner 
// function that is being returned is created within an outer function, making it a closure, and it has access to the variables within
//  the outer function, in this case the variable baseNumber.


function createBase(baseNumber) {
  return function(N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  }
}
var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));



// Q10: FizzBuzz Challenge 

// Problem
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at
// multiples of 3 and 5.


// Ans- 

for (let i = 1; i <= 100; i++) {
  
  let f = i % 3 == 0,
      b = i % 5 == 0;

  console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}




// Q11: Given two strings, return true if they are anagrams of one another 
// Problem
// eg.: Mary is an anagram of Army


var firstWord = "Mary";
var secondWord = "Army";

console.log(isAnagram(firstWord, secondWord)); //true
console.log(isAnagram("Final","Fnial"));  //true
console.log(isAnagram("Final","Fnnial")); //False

function isAnagram(first, second) {
  //change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}





// Q12: How would you use a closure to create a private counter? 
// Ans-
// You can create a function within an outer function (a closure) that allows you to update a private variable but the variable 
// wouldn't be accessible from outside the function without the use of a helper function.


function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { 
      _counter += increment; 
    },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}
// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way
console.log(c.retrieve());   //output: The counter is currently at: 14





// Q13: Provide some examples of non-bulean value coercion to a boolean one

// Ans- 
// The question is when a non-boolean value is coerced to a boolean, does it become true or false, respectively?

// The specific list of "falsy" values in JavaScript is as follows:

//  ""   //(empty string)
//  0, -0, NaN   //(invalid number)
//  null, undefined
//  false
// Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

// "hello"
// 42
// true
// [ ], [ 1, "2", 3 ]    //(arrays)
// { }, { a: 42 }   //(objects)
// function foo() {..}   //(functions)



// Q14: What will be the output of the following code?
 
// Problem
var y = 1;
if (function f() {}) {
  console.log(y);
  y += typeof f;
  console.log(y);
}
console.log(y);

// Above code would give output 1undefined. If condition statement evaluate using eval so eval(function f() {}) which 
// return function f() {} which is true so inside if statement code execute. typeof f return undefined because if statement
//  code execute at run time, so statement inside if condition evaluated at run time.