// Q Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are given.

// Example 1
// Input
// ```
// side 1 = 3
// side 2 = 4
// side 3 = 5
// ```
// #### Output
// ```
// 6
// ```

const area = (a, b, c) => {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  return area;
};
console.log(area(3, 4, 5));
