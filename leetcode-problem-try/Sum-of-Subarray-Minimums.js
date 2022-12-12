// Q. Sum of Subarray Minimums
// Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. 
// Since the answer may be large, return the answer modulo 109 + 7.

// Example 1:
// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.

// Example 2:
// Input: arr = [11,81,94,43,3]
// Output: 444



var sumSubarrayMins = function(arr) {
    let stack = []
  const left = []
  const right = []


  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    let count = 1
    while (stack.length && num <= stack[stack.length - 1][0]) { 
      count += stack.pop()[1]
    }
    stack.push([num, count])
    left[i] = count
  }
  stack = []
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i]
    let count = 1
    while (stack.length && num < stack[stack.length - 1][0]) {
      count += stack.pop()[1]
    }
    stack.push([num, count])
    right[i] = count
  }
  const result = arr.reduce((acc, num, i) => acc + num * (left[i] * right[i]), 0);
  return result % ((10 ** 9) + 7);
   
};

console.log(sumSubarrayMins([3,1,2,4]))



const MOD = 10 ** 9 + 7;

var sumSubarrayMins = function(arr) {
    const stack = [];
    arr.splice(0, 0, -Infinity);
    arr.push(-Infinity);
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            const mid = stack.pop();
            const left = mid - stack[stack.length - 1];
            const right = i - mid;
            result += left * right * arr[mid];
        }
        stack.push(i);
    }
    return result % MOD;
};
console.log(sumSubarrayMins([11,81,94,43,3]))