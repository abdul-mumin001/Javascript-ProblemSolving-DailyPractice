// Q Take a number and return the first and last digit of the number.

// Input 1

// ```
// 123
// ```
// Output 1:

// ```
// 1 3
// ```
// Explanation 1: 
// ```
// First digit of 123 is 1
// and last digit of 123 is 3
// ```

function firstAndLast(num) {

    let a = num;
    b = (a % 10)
    c = Math.floor(a / 100)
    return (c + " " + b)
  
  }
  console.log(firstAndLast(123))
  console.log(firstAndLast(219));