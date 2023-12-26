// Q Given an array, delete the last element of the array

// Input:
// ```
// [1, 2, 3] 
// ```
// Output:
// ```
// [1, 2]
// ```
// Input:
// ```
// [2, 5, 10, 7, 5] 
// ```
// Output:
// ```
// [2, 5, 10, 7]
// ```

function removeEnd(arr){
    return arr.splice(0,arr.length-1)
  }
  console.log(removeEnd([1, 2, 3]))
  console.log(removeEnd([2, 5, 10, 7, 5]))