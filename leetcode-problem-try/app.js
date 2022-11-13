// Q. You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

// event1 = [startTime1, endTime1] and
// event2 = [startTime2, endTime2].
// Event times are valid 24 hours format in the form of HH:MM.

// A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

// Return true if there is a conflict between two events. Otherwise, return false.



// Example 1:

// Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
// Output: true
// Explanation: The two events intersect at time 2:00.
// Example 2:

// Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
// Output: true
// Explanation: The two events intersect starting from 01:20 to 02:00.
// Example 3:

// Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
// Output: false
// Explanation: The two events do not intersect.


var haveConflict = function (event1, event2) {
    if (event1[0] > event2[0]) {
        var temp = event2;
        event2 = event1;
        event1 = temp;
    }
    return event2[0] <= event1[1];
};




var haveConflict = function (event1, event2) {

    const [startA, endA] = event1
    const [startB, endB] = event2


    if (startA <= startB) {
        if (endA >= startB)
            return true
    } else {
        if (endB >= startA)
            return true
    }



    return false;
};




// Q.Implement pow(x, n), which calculates x raised to the power n (i.e., xn).



// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25



var myPow = function (x, n) {
    // let pow=1;
    // for(let i=0;i<n;i++){
    //     pow=pow*x;
    // }
    // return pow;
    // for the above logic negative testcases not pass 


    return Math.pow(x, n);


    let res = 1;

    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    while ((n <= -1) || (n >= 1)) {


        if (n % 2 === 1) {
            res *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }
    return res;

};




// Q. Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


var isAnagram = function (s, t) {
    var freqInS = {};
    var freqInT = {};
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (freqInS[c] == undefined) {
            freqInS[c] = 1;
        } else {
            freqInS[c]++
        }
    }
    for (var i = 0; i < t.length; i++) {
        var c = t[i];
        if (freqInT[c] == undefined) {
            freqInT[c] = 1;
        } else {
            freqInT[c]++
        }
    }
    for (var char in freqInS) {
        if (freqInS[char] != freqInT[char] || s.length != t.length) {
            return false;
        }
    }
    return true;
};


// second method 

var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false
    }

    const map = new Map()

    for (let i = 0; i < s.length; i++) {
        const a = s[i]
        const b = t[i]

        const countA = map.get(a) || 0
        const countB = map.get(b) || 0


        // console.log(countA)
        // console.log(countB)

        if (a !== b) {
            map.set(a, countA + 1)
            map.set(b, countB - 1)
        }
    }
    let sum = 0
    map.forEach((value) => {
        sum += Math.abs(value)
    })
    return sum === 0
};





// Q.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]


var twoSum = function (nums, target) {
    let newObj = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (newObj[target - n] !== undefined) {
            return [newObj[target - n], i];
        }
        newObj[n] = i;
    }
    return [];


};


var twoSum = function (nums, target) {
    const m = new Map();

    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];

        if (m.get(curNum) !== undefined)
            return [i, m.get(curNum)];

        m.set(target - curNum, i);
    }
};



var twoSum = function (nums, target) {

    let storage = {};
    for (let [i, num] of nums.entries()) {
        if (storage[num] !== undefined)
            return [storage[num], i];
        storage[target - num] = i;
    }
};



// Q. Given a array containing both strings and numbers, remove all the numbers and concat all the strings. Return the resulting string

// ### Input Format
// An array

// ### Output Format
// Return a string

// ### Sample Input:
// ```
// ['Hello', 'World', 123]
// ```

// ### Sample Output:
// ```
// Hello World
// ```

// ### Sample Input:
// ```
// [1, 2, "My", 56, "name", "is", 5, "Aircampus"]
// ```

// ### Sample Output:
// ```
// My name is Aircampus



function createStr(arr){
    var str='';
   for(var i=0;i<arr.length;i++){
     if(typeof(arr[i])=='string'){
       if(str==''){
         str+=arr[i];
         // console.log(str)
       }else{
         str+=' '+arr[i];
         // console.log(str)
       }
     }
   }
   return str;
 }
 console.log(createStr(['Hello', 'World', 123]))
 console.log(createStr([1, 2, "My", 56, "name", "is", 5, "Aircampus"]))




//  Q.Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

//  The value of |x| is defined as:
 
//  x if x >= 0.
//  -x if x < 0.
  
 
//  Example 1:
 
//  Input: nums = [1,2,2,1], k = 1
//  Output: 4
//  Explanation: The pairs with an absolute difference of 1 are:
//  - [1,2,2,1]
//  - [1,2,2,1]
//  - [1,2,2,1]
//  - [1,2,2,1]
//  Example 2:
 
//  Input: nums = [1,3], k = 3
//  Output: 0
//  Explanation: There are no pairs with an absolute difference of 3.
//  Example 3:
 
//  Input: nums = [3,2,1,5,4], k = 2
//  Output: 3
//  Explanation: The pairs with an absolute difference of 2 are:
//  - [3,2,1,5,4]
//  - [3,2,1,5,4]
//  - [3,2,1,5,4]




var countKDifference = function(nums, k) {
    var obj={};
    var ans=0;

    for(var i=0;i<nums.length;i++){
        if(obj[nums[i] + k] != undefined){
            ans+=obj[nums[i]+k];
        }
        if(obj[nums[i] - k] != undefined){
            ans+=obj[nums[i]-k];
        }
        if(obj[nums[i]]==undefined){
            obj[nums[i]]=1;
        }else{
            obj[nums[i]]++;
        }
    }
    return ans;
};


// 2nd method 
var countKDifference = function(nums, k) {
let count = 0
// for i of nums
for (let eli of nums)
  // for j of nums
for (let elj of nums)
  if (Math.abs(eli - elj) === k) ++count
    // if Math.abs(eli - elj) == k 
      // ++count

return count / 2
};



// Q. Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1




var firstUniqChar = function(s) {
    for(i=0; i<s.length; i++){
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
         return i
        }
    }

    return -1

};



var firstUniqChar = function(s) {
    let map=new Map()
    for(let index=0;index<s.length;index++)
        {
            if(map.has(s[index]))
            {
               map.set(s[index],map.get(s[index])+1)
            }
            else
            {
                map.set(s[index],1)
            }
        }

        // console.log(map)
        
        for(let [key,value] of map.entries())
        {
            if (value==1)
            {
                return s.indexOf(key)
            }
        }
        return -1
};




// Q.## Given an object items and their price, and a number. Return all the items whose price is greater than the given number.

// ### Input Format
// An object ```obj``` and a number  ```n```

// ### Output Format
// Return a object.

// ### Sample Input:
// ```
// { "a": 3000, "b": 200, "c": 1050 }
// 1000
// ```

// ### Sample Output:
// ```
// { "a": 3000, "c": 1050 }
// ```

// ### Sample Input:
// ```
// { "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }
// 40
// ```

// ### Sample Output:
// ```
// {}



function expensive(obj, n){
    let objec={};
      for(let i in obj){
        if(obj[i]>n){
         objec[i]=obj[i];
        }
      }
      return objec;
    }
    console.log(expensive({ "a": 3000, "b": 200, "c": 1050 },
    1000))





    // Q. Extract the Last Name from the given string

    // ### Input Format
    // A string ```string```
    
    // ### Output Format
    // Return last Name
    
    // ### Sample Input:
    // ```
    // Air Campus
    // ```
    
    // ### Sample Output:
    // ```
    // Campus
    // ```
    
    // ### Sample Input:
    // ```
    // Aditya Singh
    // ```
    
    // ### Sample Output:
    // ```
    // Singh



    function lastName(str){
        var name=str.split(' ');
        var last_name=name[name.length-1];
        return  last_name;
      }
      console.log(lastName('Air Campus'))



    //   Q. Given a array containing both strings and numbers, remove all the numbers and concat all the strings. Return the resulting string
    //   Input Format
    //   An array
      
    //   Output Format
    //   Return a string
      
    //   Sample Input:
    //   ['Hello', 'World', 123]

    //   Sample Output:
    //   Hello World

    //   Sample Input:
    //   [1, 2, "My", 56, "name", "is", 5, "Aircampus"]

    //   Sample Output:
    //   My name is Aircampus


    function createStr(arr){
        var str='';
       for(var i=0;i<arr.length;i++){
         if(typeof(arr[i])=='string'){
           if(str==''){
             str+=arr[i];
           // console.log(str)
           }else{
             str+=' '+arr[i];
             // console.log(str)
           }
         }
       }
       return str;
     }
     console.log(createStr(['Hello', 'World', 123]))
     console.log(createStr([1, 2, "My", 56, "name", "is", 5, "Aircampus"]))




    //  Q. Search in Rotated Sorted Array
    
    //  There is an integer array nums sorted in ascending order (with distinct values).
     
    //  Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
     
    //  Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
     
    //  You must write an algorithm with O(log n) runtime complexity.
     
      
     
    //  Example 1:
     
    //  Input: nums = [4,5,6,7,0,1,2], target = 0
    //  Output: 4
    //  Example 2:
     
    //  Input: nums = [4,5,6,7,0,1,2], target = 3
    //  Output: -1
    //  Example 3:
     
    //  Input: nums = [1], target = 0
    //  Output: -1



    var search = function(nums, target) {
        let left = 0;
        let right = nums.length - 1;
    
        while(left <= right){
            let mid = Math.floor((right + left) / 2);

            // console.log(mid)

            if(nums[mid] === target) return mid
    
            else if(nums[left] <= nums[mid]){
                if(target >= nums[left] && target <= nums[mid]){
                    right = mid - 1;
                    // console.log(right)
                }
                else {
                    left = mid + 1;
                    // console.log(left)
                }
            }
            else {
                if(target <= nums[right] && target >= nums[mid]){
                    left = mid + 1;
                    // console.log(left)
                }
                else {
                    right = mid - 1
                    // console.log(right)
                }
            }
        }
    
        return -1
      
    };








// Q. Find First and Last Position of Element in Sorted Array


// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]






var searchRange = function(nums, target) {
    let low = 0, high = nums.length-1, mid;
        
        // find the start
        while(low <= high) {
            mid = Math.floor((low+high)/2);
            // console.log(mid);

            if(nums[mid] >= target){
                 high = mid-1;
            }else{
                 low = mid+1;
            }
        }
        
        // if target doesn't exist
        if(nums[low] !== target){
            return [-1, -1];
        }
        
        const start = low;
        
        // reset low and high
        low = 0, high = nums.length-1;
        
        // find the end
        while(low <= high) {
            mid = Math.floor((low+high)/2);
            // console.log(mid);
            if(nums[mid] <= target){
                low = mid+1;
            }else {
                high = mid-1;
            }
        }
        return [start, high]; 
    };
    