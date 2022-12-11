// Q. Maximum Subarray
// Given an integer array nums, find the 
// subarray
// which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:
// Input: nums = [1]
// Output: 1



var maxSubArray = function(nums) {
    let MaxSum=-Infinity;
    let currSum=0;
    for(let i=0;i<nums.length;i++){
        currSum=Math.max(nums[i],currSum+nums[i]);
        MaxSum=Math.max(currSum,MaxSum);
    }
    return MaxSum;

};
console.log(maxSubArray([4,-1,2,1]))