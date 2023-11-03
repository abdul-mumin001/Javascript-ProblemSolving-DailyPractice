// Q Last Digit
// Write a program to check whether the last digit of a number is divisible by 2 or not.

// Eg 1: 
// 10 <br>
// Output: 
// yes

// Eg 2:
// 7 <br>
// Output :
// no

function last_digit(num){
   
  let x=(num%10)%2;
    if(x==0){
      return "yes"
    }else{
      return "no"
    }
   
  }
  console.log(last_digit(7))