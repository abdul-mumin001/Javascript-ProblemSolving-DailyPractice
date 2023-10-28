// Q Compute Sum
// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then 
// returns triple their sum.

// Eg 1: 
// 10 <br>
// 2
// Output: 
// 12

// Eg 2:
// 7 <br>
// 7
// Output :
// 42

function compute_sum(num1,num2){

  let x=num1+num2;
    let y=(num1+num2)*3;
    if(num1==num2){
      return y;
    }else{
      return x;
    }

  }
  console.log(compute_sum(10,2))
  console.log(compute_sum(7,7))