// Q Given an integer array, return true if it can be used for binary search else return false
// Input:
// `[1, 5, 7, 8]
// `
// Output:
// `
// true
// `
// Input:
// `
// [1, 3, 2]
// `
// Output:
// `
// false
// `

function binary_search(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(binary_search([1, 5, 7, 8]));
console.log(binary_search([1, 3, 2]));
