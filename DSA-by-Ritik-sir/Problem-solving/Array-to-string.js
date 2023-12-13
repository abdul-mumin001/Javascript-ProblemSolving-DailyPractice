// Q Given an array, convert the given array to string.

// Input:
// ```
// [1, 2, 3]
// ```
// Output:
// ```
// '1,2,3'
// ```
// Input:
// ```
// [2, 5, 10, 7, 5]
// ```
// Output:
// ```
// '2,5,10,7,5'
// ```

function arrString(arr) {
  let convertToString = arr.toString();
  return convertToString;
}
console.log(arrString([1, 2, 3]));
console.log(arrString([2, 5, 10, 7, 5]));