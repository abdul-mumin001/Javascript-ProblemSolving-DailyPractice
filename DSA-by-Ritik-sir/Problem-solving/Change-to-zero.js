// Q Given an array, a start index and an end index, change all the elements to 0 from the start index 
// to end index.

// Input:
// ```
// [1, 2, 3] 
// 1 2
// ```
// Output:
// ```
// [1, 0, 3]
// ```
// Input:
// ```
// [2, 5, 10, 7, 5] 
// 2 3
// ```
// Output:
// ```
// [2, 5, 0, 7, 5]
// ```

function changeToZero(arr, start, end){
  
    for(let i=start; i<end; i++){
     arr.splice(start,1,0)
      
    }
    return arr
  }
  console.log(changeToZero([1,3,4,5,7,8,9] , 2 , 5))
  console.log(changeToZero([1, 2, 3],1, 2))
  
