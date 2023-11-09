// Q Take input a as a number and b as percentage. Write a program to calculate the percentage of a number.

// Input 1
// ```
//  20 5
// ```
// Output 1:
// ```
// 1
// ```
// Explanation 1: 
// ```
// 5% of 20 is 1
// ```


function percent(num, percentage) {

    let a=num;
    let b=percentage;
    let z=a/100*b
    return z;

  }
  console.log(percent(20,5))
  console.log(percent(100,5))