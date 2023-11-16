// Q Sum Range
// You will be given two numbers, if their sum is in 50..80 (inclusive) then return 65 otherwise return 80.

// Eg 1: 
// num1 = 30, num2 = 40
// Output: 
// 65

// Eg 2:
// num1 = 10, num2 = 20
// Output :
// 80

function sum_range(num1,num2){
    
    let a=num1+num2
  if(a>=50 && a<=80){
    return 65;
  }else{
    return 80;
  }

  }
  console.log(sum_range(30,40))