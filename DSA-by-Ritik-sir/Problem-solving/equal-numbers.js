// Q Equal Numbers
// Write a JavaScript program to check if the two numbers are equal or not. If the two numbers are equal, 
// return “Yeah!!” else “OOPS!”.

// Eg 1: 
// num1 = 50, num2 = 50
// output: 
// Yeah!!

// Eg 2:
// num1 = 20, num2 = 21
// output :
// OOPS!

function equal_numbers(num1,num2){
    
  if(num1==num2){
    return "Yeah!!";
  }else{
    return "OOPS!"; 
  }
   
  }
   console.log(equal_numbers(50,55))