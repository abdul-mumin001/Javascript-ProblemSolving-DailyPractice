// Q  A manager wants to increment each of its employees' salaries by Rs.1000. You are given an array with the
//  current salary of each employee. Return the array containing the incremented salary. Use array callback 
//  methods.

// Input:
// ```
// [1000,2000, 3000]
// ```
// Output:
// ```
// [2000, 3000, 4000]
// ```
// Input:
// ```
// [20000, 40000, 500000, 20000, 10000]
// ```
// Output:
// ```
// [21000, 41000, 501000, 21000, 11000]
// ```

function goodManager(arr){
    let newArray=arr.map(function(element){
      return element+1000
    })
    return newArray;
  }
  console.log(goodManager([1000,2000, 3000]))