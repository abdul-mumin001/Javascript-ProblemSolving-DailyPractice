// Q. Kth Largest Element in an Array

// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// You must solve it in O(n) time complexity.

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4



// var findKthLargest = function(nums, k) {
//     return nums.sort(function(a,b) {return b-a})[k-1]
// };
    
// console.log(findKthLargest([3,2,1,5,6,4],2));


// 2nd method with all downwords code

 var findKthLargest = function(nums, k) {
    
     
    quickSort(nums, 0, nums.length, k)
    return nums[k - 1]

};
function quickSort(nums, start, end, k) {
  if (end <= start) return
  
  let mid = Math.floor((start + end) / 2)
  let left = start, right = end
  
  while(left < right) {
    while (left < mid) {
      if (nums[left] < nums[mid]) {
        swap(nums, left, mid)
        mid = left
      } else {
        left++
      }
    }
    
    while(right > mid) {
      if (nums[right] > nums[mid]) {
        swap(nums, right, mid)
        mid = right
      } else {
        right--
      }
    }
  }
  
  if (mid === k - 1) return
  if (mid < k - 1) {
    quickSort(nums, mid, end, k)
  } else {
    quickSort(nums, start, mid, k)
  }
  
}

function swap(nums, i, j) {
  const tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}
