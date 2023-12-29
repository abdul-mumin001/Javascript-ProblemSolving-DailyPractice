// Q Given an array, if the array contains duplicate elements return true, else return false

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
// true
// ```

function isDuplicate(arr){
    for(let i=0;i<arr.length;i++){
    let a=arr.indexOf(arr[i])
      let b=arr.lastIndexOf(arr[i])
       
          if(a!=b){
        return true;
      }else{
        return false;
      }
       }
     
  }
  console.log(isDuplicate([1, 2, 3, 4, 5]))
  