// Q. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]




var twoSum = function(nums, target) {
    let newObj = {};
  
    for(let i = 0; i < nums.length; i++) {
      const n = nums[i];
      if(newObj[target - n] !== undefined) {
        return [newObj[target - n], i];
      }
      newObj[n] = i;
    }
    return [];

};

console.log(twoSum([3,2,4],6))




var twoSum = function(nums, target) {
 const m = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        
        if (m.get(curNum) !== undefined)
            return [i, m.get(curNum)];
        
        m.set(target - curNum, i);
    }



let storage={};
for(let [i,num] of nums.entries()){
    if(storage[num] !== undefined)
    return [storage[num],i];
    storage[target-num]=i;
}
};

console.log(twoSum([2,7,11,15],9))