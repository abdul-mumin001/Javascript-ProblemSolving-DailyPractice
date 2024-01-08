// Q Given an array of integers, you are required to create Judwaa of each occurrence of 2 i.e duplicates
//  of 2 and shift the elements to right as shown in the example.

// Input:
// ```
// [1, 2, 5 , 2, 7, 9, 1, 3]
// ```
// Output:
// ```
// [1, 2, 2, 5, 2, 2, 7, 9]
// ```
// Input:
// ```
// [1, 3, 5, 9, 10]
// ```
// Output:
// ```
// [1, 3, 5, 9, 10]
// ```

function judwaa(arr) {
  var result = [];
  var n = arr.length;
  var totalL = n;
  for (var i = 0; i < totalL; i++) {
    if (arr[i] == 2) {
      result.push(arr[i]);
      result.push(arr[i]);
      totalL--;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(judwaa([1, 2, 5, 2, 7, 9, 1, 3]));
console.log(judwaa([1, 3, 5, 9, 10]));
