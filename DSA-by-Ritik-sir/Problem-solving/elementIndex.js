// Q You are given two variables  arr and element as function parameters. Check if the given variable arr is an 
// array or not, if it is an array return the index of element in the array, else return “Not Array”. 

// Input:
// ```
// [1,2,3] 3
// ```
// Output:
// ```
// 2
// ```
// Input:
// ```
// 123 3
// ```
// Output:
// ```
// Not Array
// ```

function elementIndex(arr, element){
    if(Array.isArray(arr)===true){
      var flag2 = true;
      for(var i =0; i<arr.length; i++){
        if(arr[i]===element){
         flag2 = false;
          return i;
         
        }
      }  
      if(flag2 === true){
        return -1;
        
      }
    } else {
      return "Not Array";
    }
  
  }
  console.log(elementIndex([1,2,3],4))