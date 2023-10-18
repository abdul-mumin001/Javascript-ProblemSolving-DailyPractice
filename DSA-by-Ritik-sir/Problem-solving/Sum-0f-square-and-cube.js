// Q Sum of Square and Cube of a Number
// Given a number return its sum of square and cube.

// Eg 1:
// 10 <br>
// Output:
// 1100

// Eg 2:
// 25 <br>
// output :
// 16250

function sum(num) {
  let SumOfSquareaCube = num ** 2 + num ** 3;
  return SumOfSquareaCube;
}
console.log(sum(10));
console.log(sum(25));
