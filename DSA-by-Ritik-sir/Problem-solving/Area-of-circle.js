// Q Write a program to print the area of a circle by taking the radius as input.

// Example 1
// Input
// ```
// 4
// ```
// Output
// ```
// 50.26548245743669
// ```
// Example 2
// Input
// ```
// 37
// ```
// Output
// ```
// 4300.840342764427
// ```

const calculateArea = (radius) => {
  const z = Math.PI * radius * radius;
  return z;
};
console.log(calculateArea(4));
console.log(calculateArea(37));
