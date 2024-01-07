// Q Given an array of integers and a number ‘k’, increments the numbers in the array such that all the
// numbers in the array are divisible by ‘k’

// Input:
// ```
// [1, 5, 7, 8]
// 3
// ```
// Output:
// ```
// [3, 6, 9, 9]
// ```
// Input:
// ```
// [7, 2, 5]
// 12
// ```
// Output:
// ```
// [12, 12, 12]
// ```

function divisibleByK(arr, k) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % k != 0) {
      while (arr[i] % k != 0) {
        arr[i] = arr[i] + 1;
      }
    }
    if (arr[i] % k == 0) arr1.push(arr[i]);
  }
  return arr1;
}
console.log(divisibleByK([1, 5, 7, 8], 3));
console.log(divisibleByK([7, 2, 5], 12));
