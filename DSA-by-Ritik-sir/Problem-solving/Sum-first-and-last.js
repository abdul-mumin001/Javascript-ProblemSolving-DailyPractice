// Q You are given an integer array as function parameters. Find and return the sum of the first and last
// element of the array.

// Input:
// ```
// [1, 2, 3 ,4 ,5 ,6 7]
// ```
// Output :

// ```
// 8
// ```

function sumFirstLast(arr) {
  let x = arr[0] + arr[arr.length - 1];

  return x;
}
console.log(sumFirstLast([1, 2, 3, 4, 5, 6, 7]));
