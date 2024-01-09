// Q Given the solution to the below questions, but somehow bugs got introduced in the solution. Can 
// you fix them ?
// Given an array, if the array contains duplicate elements return true, else return false

// Input:
// ```
// [1, 2, 3, 4, 5]
// ```
// Output:
// ```
// false
// ```
// Input:
// ```
// [2, 5, 10, 7, 5]
// ```
// Output:
// ```
// false
// ```

function isDuplicate(arr) {
    for (let i = 0; i <= arr.length; i++) {
      if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i]))
        return true;
    }
    return false;
  }
  console.log(isDuplicate([1, 2, 3, 4, 5]))