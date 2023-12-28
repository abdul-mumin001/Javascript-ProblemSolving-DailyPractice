// Q Given two integer arrays, remove all the odd numbers from both the arrays and merge them into one array. 
// Return the new array in descending order.

// Input:
// ```
// [1, 2, 3, 4, 5]
// [1, 2, 3]
// ```
// Output:
// ```
// [4, 2, 2]
// ```
// Input:
// ```
// [2, 5, 10, 7, 5]
// [5, 17, 20, 15, 44, 55]
// ```
// Output:
// ```
// [44, 20, 10, 2]
// ```

function oddOne(arr1, arr2){
    let arr3=arr1.concat(arr2)
      let arr4=arr3.filter((item)=>{
        return item%2===0
      })
      arr4.sort()
      return arr4.sort((a,b)=>{
        return b-a
      })
    }
 console.log(oddOne([1, 2, 3, 4, 5], [1, 2, 3]))