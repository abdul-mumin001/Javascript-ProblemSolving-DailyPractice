// Q Given an array, start index and an end index. Return the array from the start index to end index

// Input:
// ```
// [1, 2, 3, 4, 5]
// 1 3
// ```
// Output:
// ```
// [2, 3]
// ```
// Input:
// ```
// [2, 5, 10, 7, 5, 5, 17, 20, 15, 44, 55]
// 4 8
// ```
// Output:
// ```
// [5, 5, 17, 20]
// ```

function subArray(arr, start, end){
    return arr.slice(start,end)
  }
  console.log(subArray([1, 2, 3, 4, 5], 1, 3))