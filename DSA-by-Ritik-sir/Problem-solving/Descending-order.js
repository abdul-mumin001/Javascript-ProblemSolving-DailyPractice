// // Q Given an array, return the descending order
// Input:
// ```
// [1, 5, 7, 8]
// ```
// Output:
// ```
// [8,7,5,1]
// ```
// Input:
// ```
// [1, 2, 3, 4, 3]

// ```
// Output:
// ```
// [4,3,3,2,1]
// ```

function descending_order(arr) {
  arr.sort((a, b) => a - b);
  return arr.reverse();
}
console.log(descending_order([1, 5, 7, 8]));
console.log(descending_order([1, 2, 3, 4, 3]));
