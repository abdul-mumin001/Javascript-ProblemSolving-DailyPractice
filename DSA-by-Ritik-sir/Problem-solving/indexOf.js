// Q Given an integer array and an element as function parameter, return the index of the given element if it 
// exists, else return “Not Found”. If the array contains multiple occurence of an element return the index of 
// last occurrence of the element.

// Input:
// ```
// [1, 2, 3,] 2
// ```
// Output:
// ```
// 1
// ```
// Input:
// ```
// [2,5,10] 9
// ```
// Output:
// ```
// Not Found
// ```
// Input:
// ```
// [2, 5, 10, 7, 5, 19, 10] 5
// ```
// Output:
// ```
// 4
// ```

function indexOf(arr, element){

    if(Array.isArray(arr)===true){
      flag=false;
      for(var i=0;i<arr.length;i++){
        if(arr[i]===element){
          flag=true;
        return i
        }else {
      return 'Not Found'
    }
        
      }
    }
    
  }
  console.log(indexOf([1, 2, 3,], 2))
  console.log(indexOf([1, 2], 1))