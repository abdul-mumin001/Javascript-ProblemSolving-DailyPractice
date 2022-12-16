// Q. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step



var climbStairs = function(n) {
    if(n==1 || n==0){
        return 1
    }
    let first=1;
    let sec=2;
    let third;
    for(let i=3;i<=n;i++){
        third=first+sec;
        first=sec;
        sec=third;
    }
    return sec;
};
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))


// second way 

var climbStair = function(n) {
    let memo = new Array(n).fill(0);
    if(n<=2){
        return n;
    }
    memo[1] = 1;
    memo[2] = 2;
    for(let i = 3; i < n+1 ; i++){
        memo[i] = memo[i-2] + memo[i-1]
    }
    return memo[n];
    
};

console.log(climbStair(2))
console.log(climbStair(3))
console.log(climbStair(4))