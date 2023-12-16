// Q Given an array and a number, add the number to the end of the array.

// Input:
// ```
// [1, 2, 3] 
// 5
// ```
// Output:
// ```
// [1, 2, 3, 5]
// ```
// Input:
// ```
// [2, 5, 10, 7, 5] 
// 1
// ```
// Output:
// ```
// [2, 5, 10, 7, 5, 1]
// ```

function addEnd(arr, number){
    arr.push(number)
    return arr
  }
  console.log(addEnd([1, 2, 3],5))