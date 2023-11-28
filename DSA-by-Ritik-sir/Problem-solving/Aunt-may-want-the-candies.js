// Q Aunt May wants to distribute candies to 5 childrens, you are given an array of 5 elements, each element 
// depicts how many candies each child will get. Find and return how many candies Aunt May have in total.

// Input:
// ```
// [1, 3, 4, 7, 5]
// ```
// Output :

// ```
// 20
// ```

function totalCandies(arr){
    let sum=0;
   for(let i=0;i<arr.length;i++){
     sum+=arr[i];
   }
    return sum;
  }
  console.log(totalCandies([1, 3, 4, 7, 5]))