// Q You are given an array arr, if the length of the array is greater than 5 return “Hello” else return “World”

// Input:
// ```
// [1, 2, 3 ,4 ,5 ,6 7]
// ```

// Output :

// ```
// Hello
// ```

function arrayHelloWorld(arr) {
  if ([arr.length] > 5) {
    return "Hello";
  } else {
    return "World";
  }
}
console.log(arrayHelloWorld([1, 2, 3, 4, 5, 6, 7]));
console.log(arrayHelloWorld([1, 3, 4, 7]));
