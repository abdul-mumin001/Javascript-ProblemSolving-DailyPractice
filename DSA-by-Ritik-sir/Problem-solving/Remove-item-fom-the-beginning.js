// Q Given an array, delete the first element of the array

// Input:
// ```
// [1, 2, 3] 
// ```
// Output:
// ```
// [2, 3]
// ```
// Input:
// ```
// [2, 5, 10, 7, 5] 
// ```
// Output:
// ```
// [5, 10, 7, 5]
// ```

function removeBeginning(arr){
    arr.shift()
     return arr
   
     
   }
   console.log(removeBeginning([1, 2, 3]))