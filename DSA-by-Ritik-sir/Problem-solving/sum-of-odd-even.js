// Q. Given an integer array, and a number ‘n’, please return the sum of integers at odd position and sum of 
// integers at even position.
// Input:
// [1, 5, 7, 8]
// Output:
// [13,8]

function odd_even_position(arr){
    let n=arr.length
    let odd=0;
    let even=0;
    for(let i=0;i<n;i++){
      if(i%2==0){
        even+=arr[i];
     
      }
      else{
        odd+=arr[i];
     
      }
    }
    return [odd,even]
  }
  console.log(odd_even_position([1, 5, 7, 8]))
  console.log(odd_even_position([1, 2, 3]))