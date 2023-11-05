// Q Take two numbers as input perpendicular and base respectively and write a program to print the hypotenuse of
//  the right angle triangle.

// Example 1
// Input
// ```
// perpendicular = 3
// base = 4
// ```
// Output
// ```
// 5
// ```

const hypotenuse = (perpendicular, base) => {

    const b=base**2;
    const p=perpendicular**2;
    const sum= Math.sqrt(b+p);
    return sum;
    console.log(sum)
  }
  console.log(hypotenuse(4,3))
  console.log(hypotenuse(3,4))