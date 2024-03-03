// Q Given an object, return the object as an array where each array element represent the corresponding
//  key value.

// Input:
// ```
// { a: 1, b: 2 }
// ```
// Output:
// ```
// [["a", 1], ["b", 2]]
// ```
// Input:
// ```
// {}
// ```
// Output:
// ```
// []
// ```

function array(obj) {
  return Object.entries(obj);
}
console.log(array({ a: 1, b: 2 }));
console.log(array({}));
