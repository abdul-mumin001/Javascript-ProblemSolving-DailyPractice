// Q When God was creating planets, he forgot to create one planet. Can you find which planet it is ?

// You are given an array of numbers. Each number denotes one planet. The array contains elements in the
//  range of [0, array-size].

// Note: The missing planet is replaced by zero. You need to find which planet is missing.
// Input:
// ```
// [1, 5, 7, 8, 3, 0, 2, 6]
// ```
// Output:
// ```
// 4
// ```
// Input:
// ```
// [0, 1, 2, 3, 7, 9, 5, 4, 6, 10]
// ```
// Output:
// ```
// 8
// ```

function lostPlanet(planets) {
  for (let i = 0; i < planets.length; i++) {
    if (planets.includes(i) == false) {
      return i;
    }
  }
}
console.log(lostPlanet([1, 5, 7, 8, 3, 0, 2, 6]));
console.log(lostPlanet([0, 1, 2, 3, 7, 9, 5, 4, 6, 10]));
