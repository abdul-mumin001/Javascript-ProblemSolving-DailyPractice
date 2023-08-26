// Q. Unlce Ben is giving choclates to all the kids. He wants to find out which kid has got the highest number of
// choclates and which kid got least number of choclates.

// Input Format
// An array `arr`
// The array contains number of choclates given to each kid.

// Output Format
// Return the position of kid who has got highest choclates and least choclates.

// Input:
// ` [2,5,7,4,1] `
// Output:
// ` [3, 5] `


function find_min_max(arr){
    let min=arr[0];
    let max=arr[0];
    let i=arr.length
    while(i--){
      min=arr[i] < min ? arr[i] : min;
      max=arr[i] > max ? arr[i] : max;
  
    }
    return [max,min];
  }
  console.log(find_min_max([2,5,7,4,1]))
  