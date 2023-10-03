// Q Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.

// Input 1
// ```
// 2 10
// ```
// Output 1:
// ```
// 12 -8 20 0 2
// ```
// Explanation 1:
// ```
// 2 + 10 = 12
// 2 - 10 = -8
// 2 * 10 = 20
// 2 / 10 = 0
// 2 % 10 = 2

function basicArithmetic(num1, num2) {
  let sum = num1 + num2;
  let sub = num1 - num2;
  let mul = num1 * num2;
  let quo = Math.floor(num1 / num2);
  let mod = num1 % num2;
  return sum + " " + sub + " " + mul + " " + quo + " " + mod;
}
console.log(basicArithmetic(2, 10));
console.log(basicArithmetic(4, 20));
