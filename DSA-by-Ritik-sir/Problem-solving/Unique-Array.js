// Q You are given a sorted array in ascending order, remove the duplicate elements and return the new 
// sorted array.

// Input:
// ```
// [1, 2, 2, 3, 4, 4, 5]
// ```
// Output:
// ```
// [1, 2, 3, 4, 5]
// ```
// Input:
// ```
// [2, 5, 5, 7, 10, 12, 12, 15]
// ```
// Output:
// ```
// [2, 5, 7, 10, 12, 15]
// ```

function deleteDuplicate(arr){
    return [...new Set(arr)]
    }
    console.log(deleteDuplicate([1, 2, 2, 3, 4, 4, 5]))
    console.log(deleteDuplicate([2, 5, 5, 7, 10, 12, 12, 15]))