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

function createBase(baseNumber) {
  return function(N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  }
}
var addSix = createBase(6);
addSix(10);
addSix(21);