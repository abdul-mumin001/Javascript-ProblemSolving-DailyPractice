// Q.You are given a sorted array and a target. Return the index of target if it exists in the array,
//  if target does not exist in array return the index of immediate smallest element to target and if 
//  the smallest does not exist return -1.



function search(arr, target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
      let mid=Math.floor((start+end)/2);
  
      if(arr[mid]==target){
         return mid;
      }else if(arr[mid]<target){
         start=mid+1;
      }else{
         end=mid-1;
      }
        if(target>arr[end] && target<arr[start]){
          return end;
     }
      
    }
    return -1;
  }
  console.log(search([1, 2, 3, 4, 5],3))
  console.log(search([1, 2, 3, 4, 5],7))





// Q.  You are given a sroted array and a target. Return the index of target if it exists in the array, 
// if target does not exist in array return the index of immediate greatest element to target and if the 
// greatest also does not exist return -1



function search(arr, target){
    let start=0;
    let end=arr.length-1;
  
    while(start<=end){
      let mid=Math.floor((start+end)/2);
      
      if(arr[mid]==target){
        return mid;
      }else if(arr[mid]<target){
        start=mid+1;
      }else{
        end=mid-1;
      }
       if(target>arr[end] && target<arr[start]){
          return start
        }
      
        
     
    }
    return -1
  }
  console.log(search([1, 2, 3, 4, 5],3));
  console.log(search([1, 2, 4, 5, 9],7))
 