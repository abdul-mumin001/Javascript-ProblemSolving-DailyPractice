// Q You are given two arrays arr1 and arr2, concatenate arr1  and arr2, and return the resulting array.

// Input:
// ```
// [1, 3]
// [2, 5]
// ```
// Output :

// ```
// [1, 3, 2, 5]
// ```

function arrayConcat(arr1, arr2) {
  let x = arr1.concat(arr2);

  return x;
}
console.log(arrayConcat([1, 3], [2, 5]));
console.log(arrayConcat([1, 3, 5], [2, 4, 6]));
