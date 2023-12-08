// Q Given an array of numbers, sort the array in ascending order and then return the sorted array.

// Input:
// ```
// ['c', 'a', 'd']
// ```

// Output:
// ```
// ['a', 'b', 'c']
// ```

// Input:
// ```
// [2, 5, 7, 5]
// ```

// Output:
// ```
// [2, 5, 5, 7]
// ```

function sort(arr) {
  return [...arr.sort()];
}
console.log(sort(["c", "a", "d"]));
console.log(sort([2, 5, 7, 5]));
