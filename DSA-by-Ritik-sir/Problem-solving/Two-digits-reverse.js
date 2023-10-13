// Q You will be given a two digit number you have to reverse that number

// Input Format:
// A two digit integer ```num``` is given as a function parameters.
// Input Constraints
// ```
// 10 < a < 100
// ```
// Input 
// ```
// 32
// ```
// Output :

// ```
// 23
// ```
// Explanation : 
// ```
// Reverse of 32 will be 23
// ```

function twoDigitReverse(num) {

    let a = num;
    let first_part = Math.floor(a / 10)
    let second_part = a % 10
    let reverse_number = second_part * 10 + first_part
    return reverse_number;
  
  }
  console.log(twoDigitReverse(32))
  console.log(twoDigitReverse(47));