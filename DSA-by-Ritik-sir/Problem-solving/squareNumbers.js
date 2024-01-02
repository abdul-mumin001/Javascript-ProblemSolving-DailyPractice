// Q Mickey Mouse gave a task to Goofy. The task is that Mickey will give Goofy an array of numbers and 
// Goofy will find the square of all the numbers.. Help Goofy to find the square of given numbers. Use 
// callback methods. 

// Input:
// ```
// [2, 3, 6]
// ```
// Output:
// ```
// [4, 9, 36]
// ```
// Input:
// ```
// [10, 7, 15, 99]
// ```
// Output:
// ```
// [100, 49, 225, 9801]
// ```

function square(arr){
    let newArray=arr.map(function(element){
      return element**2
    })
    return newArray
  }
  console.log(square([2, 3, 6])) 
  console.log(square([10, 7, 15, 99])) 