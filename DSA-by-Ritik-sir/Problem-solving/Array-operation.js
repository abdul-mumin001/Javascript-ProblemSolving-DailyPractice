// Q. Given an array, the array has elements and operation to be performed. The operations are ADD_END’,
//  REM_END’, ‘ADD_BEG’,’REM_BEG’. Create a new array by performing the given operations after each element.
//  Return the resulting array.

//  Input:
// [2, 'ADD_BEG', 3, 'ADD_BEG', 'REM_BEG', 4, 'ADD_END']

// Output:
// [2, 4]

function operations(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "ADD_BEG") {
      newArray.unshift(arr[i - 1]);
    }
    if (arr[i] == "REM_BEG") {
      newArray.shift();
    }
    if (arr[i] == "ADD_END") {
      newArray.push(arr[i - 1]);
    }
    if (arr[i] == "REM_END") {
      newArray.pop();
    }
  }
  return newArray;
}
console.log(operations([2, "ADD_BEG", 3, "ADD_BEG", "REM_BEG", 4, "ADD_END"]));
