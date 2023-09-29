// Q First Digit
// Take a number and print out the first digit of the number.

// Eg 1: 
// 123 <br>
// Output: 
// 1

// Eg 2:
// -534 <br>
// Output :
// 5

function first_digit(a){
    //write your code here
    let z=Math.floor(a/100);
    return z;
    // return the output
  }
  console.log(first_digit(123))
  