// Q Given an array and a number, add the number to the beginning of the array.

// Input:
// ```
// [1, 2, 3] 
// 5
// ```
// Output:
// ```
// [5, 1, 2, 3]
// ```
// Input:
// ```
// [2, 5, 10, 7, 5] 
// 1
// ```
// Output:
// ```
// [1, 2, 5, 10, 7, 5]
// ```

function addBeginning(arr,num){
    arr.unshift(num)
    return arr
}
console.log(addBeginning([1, 2, 3], 
5))