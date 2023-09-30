// Q Sum Of First and Last Digit of a Number
// Take a number and return the sum of first and last digit.

// Eg 1: 
// 10 <br>
// Output: 
// 1

// Eg 2:
// 78 <br>
// Output :
// 15

function sum(a){

    let sum=0;
    
    let lastDigit=(a%10)
    a=Math.abs(a)
    
    let firstDigit=a;
    
    while(firstDigit>=10){
      firstDigit=Math.floor(firstDigit/10)
    }
    
    sum=firstDigit+lastDigit;
    return sum;
  
  }
  console.log(sum(10))
  console.log(sum(78))