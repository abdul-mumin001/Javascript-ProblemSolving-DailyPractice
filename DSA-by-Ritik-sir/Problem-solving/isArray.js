// Q Given a variable arr as function parameter, return “YES” if the given variable arr is an array else return “NO”

// Input:
// ```
// [1,2,3]
// ```
// Output:
// ```
// YES
// ```
// Input:
// ```
// 5
// ```
// Output:
// ```
// NO
// ```

function isArray(arr){
   

    if(Array.isArray(arr)===true){
      return "YES"
    }else{
      return "NO"
    }
  
    
  }
  console.log(isArray([1,2,3]))
  