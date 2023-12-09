// Q Given an array of strings, sort the array and then return concatinating the 2nd and 2nd last element of 
// the array.
 
// Input:
// ```
// ['3', '1', '2']
// ```
// After sorting it will become ['1', '2', '3']

// Output:
// ```
// '22'
// ```
// Input:
// ```
// ['2', '5', '10', '7', '5']
// ```
// After sorting it will become ['2', '5', '5', '7', '10']

// Output:
// ```
// '25'
// ```

function sortSum(arr){
    [...arr].sort()
     return arr.length-1
   }
   console.log(sortSum(['3', '1', '2']))