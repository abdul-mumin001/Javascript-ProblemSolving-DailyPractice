// Q Take two numbers and only print the integer part when a is divided by b

// Input 1
// ```
// 3 2
// ```
// Output 1:
// ```
// 1
// ```
// Explanation 1: 
// ```
// 3 / 2 = 1.5
// The integer part is 1
// ```

function quotient(num1, num2) {

    let a=num1;
    let b=num2;
    z=Math.floor(a/b);
    return z;

  }
  console.log(quotient(3,2))
  