// Q Largest Number
// Given two numbers return the largest number.

// Input: <br>
// Inputs are provided as functional parameters.
// Output: <br>
// Return the largest number.

// Eg 1: 
// num1 = 10, num2 = 20
// output: 
// 20

// Eg 2:
// num1 = 70, num2 = 50
// output :
// 70

function largest(num1,num2){

  if(num1>num2){
    return num1;
  }else{
    return num2;
  }

  }
  console.log(largest(30,50))