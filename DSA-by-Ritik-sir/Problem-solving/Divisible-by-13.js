// Q Divisible by 13
// Write a program to check if the given number is multiple of 13 or not. If the given number is multiple of 13 
// then return the 5th power of the number,else return the same number.

// Eg 1: 
// 10 <br>
// Output: 
// 10

// Eg 2:
// 13
// Output :
// 371293


function divisible(num){
    
  if(num%13==0){
    return num**5;
  }else{
    return num;
  }

  }
  console.log(divisible(13))