// Q. Factorial Trailing Zeroes

// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

 

// Example 1:

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Example 3:

// Input: n = 0
// Output: 0


var trailingZeroes = function(n) {
    let cur = 5, total = 0;
    while(cur <= n){
        total += Math.floor(n / cur);
        cur *= 5;
    };
    return total;
 };

 console.log(trailingZeroes(5))
 console.log(trailingZeroes(10))