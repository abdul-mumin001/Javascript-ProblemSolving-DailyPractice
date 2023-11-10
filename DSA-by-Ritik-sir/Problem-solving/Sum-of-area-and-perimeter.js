// Q Write a program to print the sum of area and perimeter of the circle.

// Input 1

// ```
// 25
// ```
// Output 1:

// ```
// 2120.5750411731105
// ```

function sumAreaPerimeter(radius) {
  let sum = 0;
  let x = Math.PI * radius * radius;
  let y = 2 * Math.PI * radius;
  sum = x + y;
  return sum;
}
console.log(sumAreaPerimeter(25));
console.log(sumAreaPerimeter(5));
