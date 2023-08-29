// Q. Given an integer array, find all the elements which are divisible by the index position in which they are
// present. Consider the index of array starts from 1.
// Input:
// [1, 5, 7, 8]
// Output:
// 2

function count_all_divisions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const index = i + 1;
    if (arr[i] % index === 0) {
      count++;
    }
  }
  return count;
}
console.log(count_all_divisions([1, 5, 7, 8]));
