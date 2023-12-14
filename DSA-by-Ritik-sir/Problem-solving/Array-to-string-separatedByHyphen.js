// Q Given an array of characters, convert the given array to string separated by '-' hyphens.

// Input:
// ```
// [1, 2, 3]
// ```
// Output:
// ```
// '1-2-3'
// ```
// Input:
// ```
// [2, 5, 10, 7, 5]
// ```
// Output:
// ```
// '2-5-10-7-5'
// ```

function arrString(arr){
    let stringWithHyphen=arr.map(element=>element).join('-');
    return stringWithHyphen
  }
  console.log(arrString([1, 2, 3]))
  console.log(arrString([2, 5, 10, 7, 5]))