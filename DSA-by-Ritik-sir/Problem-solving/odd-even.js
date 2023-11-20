// Q Odd Even Number
// Given a number, determine whether it is odd or even.

// Eg 1: 
// 5
// output: 
// odd

// Eg 2:
// 8
// output :
// even

function odd_even(num){
   
  if(num%2==0){
    return "even";
  }else{
    return "odd";
  }

  }
  console.log(odd_even(8))