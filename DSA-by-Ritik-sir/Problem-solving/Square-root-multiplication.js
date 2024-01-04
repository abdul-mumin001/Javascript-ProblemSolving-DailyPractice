// Q Given an array of numbers, create a new array by multiplying each number with its square root from
// the given array. Return original array concatenated with the new array. Use map callback method.

// Input:
// ```
// [4, 9, 25, 49]
// ```
// Output:
// ```
// [8, 27, 125, 343]
// ```
// Input:
// ```
// [5, 9, 49, 40, 15]
// ```
// Output:
// ```
// [11.180339887498949, 27, 343, 252.98221281347037, 58.09475019311125]
// ```

function multiply(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = Math.sqrt(arr[i]) * arr[i];
  }
  return newArray;
}
console.log(multiply([4, 9, 25, 49]));
console.log(multiply([5, 9, 49, 40, 15]));
