// Q.Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

 

// Example 1:

// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]




var createTargetArray = function(nums, index) {
    let newArr=[];
    for(let i=0;i<nums.length;i++){
        newArr.splice(index[i],0,nums[i]);
    }
    return newArr;
}


var createTargetArray = function(nums, index) {
let Arr=[]
    for(let i=0;i<index.length;i++){
        let num=nums[i]
        let idx=index[i]
        Arr.splice(idx,0,num)
    }
    return Arr;
};