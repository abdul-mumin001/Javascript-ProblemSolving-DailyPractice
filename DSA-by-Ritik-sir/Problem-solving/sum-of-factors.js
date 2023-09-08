// Q. Only use recursion
// Input a Number and return number of digits.
// Constraints:
// 1<=n<=100000
// Input:
// "N" - integer number as a function parameter

// Output:
// number of digits
// Input

// eg 1:
// n = 10
// output:
// 2

function numberOfDigits(n) {
  if (n < 10) {
    return n;
  }
  let last = n % 10;
  let remaining = Math.floor(n / 10);
  return numberOfDigits(last + 1 + numberOfDigits(remaining));
}
console.log(numberOfDigits(10));
