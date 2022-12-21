// Q. Max Chunks To Make Sorted
// You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1].
// We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.
// Return the largest number of chunks we can make to sort the array.

//  Example 1:
// Input: arr = [4,3,2,1,0]
// Output: 1
// Explanation:
// Splitting into two or more chunks will not return the required result.
// For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.
// Example 2:
// Input: arr = [1,0,2,3,4]
// Output: 4
// Explanation:
// We can split into two chunks, such as [1, 0], [2, 3, 4].
// However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.



var maxChunksToSorted = function(arr) {
    let count = 0;
    let curr_max = -1;
    
    for(let i = 0; i < arr.length; ++i){
            if(curr_max < arr[i])
                curr_max = arr[i];
            if(curr_max == i)
                ++count;
        }
        return count;    
};
console.log(maxChunksToSorted([4,3,2,1,0]))


var maxChunksToSort = function(arr) {
    var max = 0;
   var chunk = 0;
   
   for(var i=0; i<arr.length; i++) {
       max = Math.max(arr[i], max);
       
       if(i==max) {
           chunk++;
       }
   }
   
   return chunk;
}