// Q Take a number and print out the last digit of the number.

// Input 1

// ```
// 123
// ```
// Output 1:

// ```
// 3
// ```
// Explanation 1:

// ```
// Last Digit of 123 is 3
// ````

function lastDigit(num) {
  let a = num;
  b = Math.ceil(a % 10);
  return b;
}
console.log(lastDigit(123));
console.log(lastDigit(12345));
