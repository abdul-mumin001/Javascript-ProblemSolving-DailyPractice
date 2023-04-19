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