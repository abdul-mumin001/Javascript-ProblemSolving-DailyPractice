// # First and Last
// You are given a sorted array which contains duplicate elements and a target. Return the first and last index of target if it exists in the array, else return -1

// ### Input Format
//   An array `arr` and an integer `target

// ### Output Format
// If target exists return the first and last index of the target as an array. Else return -1

// ### Sample Input: 
// ```

// [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5]
// 3
// ```

// ### Sample Output:
// ```
// [3, 6]






function search(arr, target){
    let start=0;
    let end=arr.length-1;
  
    // finding the last Index;
    let lastIndex = -1;
    while(start <= end){
      let mid = Math.floor((start+end)/2);
      if(arr[mid]==target){ 
        lastIndex = mid;
        start = mid + 1;
      } else if(target < arr[mid]){
        end = mid-1;
      } else{
        start= mid + 1;
      }
    }
  
    // find the first Index
    let firstIndex = -1;
    while(start <= end){
      let mid = Math.floor((start+end)/2);
      if(arr[mid]==target){ 
        firstIndex = mid;
        end = mid - 1;
      } else if(target < arr[mid]){
        end = mid - 1;
      } else{
        start = mid + 1;
      }
    }
    // console.log(lastIndex)
    // console.log(firstIndex)
    // if(firstIndex==-1) {
    //   return  [-1, -1];
    // }
    
    return [firstIndex, lastIndex];
  }
  console.log(search([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],3));
  