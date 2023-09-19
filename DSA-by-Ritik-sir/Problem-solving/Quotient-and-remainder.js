// Q. Quotient and Remainder Of a Number
// Take two numbers and find the quotient and remainder.
// Input: <br>
// Input are provided as functional parameter.
// Output: <br>
// Return comma seperated quotient and remainder.

// Eg 1:
// 10 <br>
// 2
// output:
// 5,0

// Eg 2:
// 7 <br>
// 3
// output :
// 2,1

// Note :- If you cannot divide the numbers then the output must be "-1,-1".

function quo_rem(a, b) {
  let ans = b == 0 ? `-1,-1` : ``;

  let quo = Math.floor(a / b);
  let rem = a % b;
  return quo + "," + rem;
}
console.log(quo_rem(7, 3));
console.log(quo_rem(10, 2));
