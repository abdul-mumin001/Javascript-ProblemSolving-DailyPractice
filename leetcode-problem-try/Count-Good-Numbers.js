// Q. Count Good Numbers

// A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).
// For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
// Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.
// A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.
// Example 1:
// Input: n = 1
// Output: 5
// Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".

// Example 2:
// Input: n = 4
// Output: 400
// Example 3:
// Input: n = 50
// Output: 564908303



var countGoodNumbers = function(n) {
    const mod = 1000000007n
    const count_5 = Math.ceil(n / 2)
    const count_4 = n - count_5
    const pow_5 = moduloPower(5, count_5, mod)
    const pow_4 = moduloPower(4, count_4, mod)

    const ans = (pow_5 * pow_4) % mod
    return Number(ans)
};
function moduloPower(base, exp, mod) {
    if (exp === 0) return 1n
    let a = moduloPower(base, Math.floor(exp / 2), mod)
    a *= a
    if (exp % 2 === 1) a *= BigInt(base)
    return a % mod
}

console.log(countGoodNumbers(4))
console.log(countGoodNumbers(3))
console.log(countGoodNumbers(50))




var countGoodNos = function(n) {
    const mod = 1000000007n
    const count_5 = Math.ceil(n / 2)
    const count_4 = n - count_5
    const pow_5 = moduloPower(5, count_5, mod)
    const pow_4 = moduloPower(4, count_4, mod)

    const ans = (pow_5 * pow_4) % mod
    return Number(ans)
};

function moduloPower(base, exp, mod) {
    if (exp === 0) return 1n
    let a = moduloPower(base, Math.floor(exp / 2), mod)
    a *= a
    if (exp % 2 === 1) a *= BigInt(base)
    return a % mod
}

console.log(countGoodNos(4))
console.log(countGoodNos(3))
console.log(countGoodNos(50))