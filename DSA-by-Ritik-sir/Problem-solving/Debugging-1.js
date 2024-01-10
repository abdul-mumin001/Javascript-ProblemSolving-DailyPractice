// Q Amit was trying to solve the Unique Array problem, but for some reason his code is not working.
// Can you help him ? Fix the given code. to produce correct output.

// You are given a sorted array in ascending order, remove the duplicate elements and return the new
// sorted array.

// Input:
// ```
// [1, 2, 2, 3, 4, 4, 5]
// ```
// Output:
// ```
// [1, 2, 3, 4, 5]
// ```
// Input:
// ```
// [2, 5, 5, 7, 10, 12, 12, 15]
// ```
// Output:
// ```
// [2, 5, 7, 10, 12, 15]
// ```

function deleteDuplicate(arr) {
  for (let i = 0; i <= arr.length; ++i) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      arr.slice(arr.lastIndexOf(arr[i]), 0);
    }
  }
  return [...new Set(arr)];
}
console.log(deleteDuplicate([1, 2, 2, 3, 4, 4, 5]));
console.log(deleteDuplicate([2, 5, 5, 7, 10, 12, 12, 15]));
