// Q Take two numbers a,b and print the exponential power of the first number raised by the second

// Input 1
// ```
// 2 5
// ```
// Output 1:
// ```
// 32
// ```
// Explanation 1: 
// ```
// 2 * 2 * 2 * 2 * 2 = 32
// ```

function power(num,exp){
    let p=num**exp;
    return p;
}
console.log(power(2,5));