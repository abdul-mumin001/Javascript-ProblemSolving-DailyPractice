// Q You are given two arrays, ```arr``` and ```moves```. ```moves``` is a 2D array containing two values.
//  The first value is present in ```arr``` and 2nd value is not present in ```arr```. Replace the value of
//   first element in ```arr``` with 2nd value from moves. Return the changed array.

// Input:
// ```
// [1, 5, 7, 8]
// [[1, 3], [7, 9]]
// ```
// Output:
// ```
// [3, 5, 9, 8]
// ```
// Explaination:
// ```
// [1, 3] is present in arr, we replace 1 with 3. 
// [7, 9] 7 is present in arr, we replace 7 with 9.
// ```
// Input:
// ```
// [1, 5, 7, 3, 2]
// [[1, 4], [5, 8], [7, 9], [3, 11], [2, 10]]
// ```
// Output:
// ```
// [4, 8, 9, 11, 10]
// ```
// Explaination:
// ```
// [1, 4] 1 is present in arr, we replace 1 with 4. 
// [5, 8] 5 is present in arr, we replace 5 with 8.
// [7, 9] 7 is present in arr, we replace 7 with 9.
// [3, 11] 3 is present in arr, we replace 3 with 11.
// [2, 10] 2 is present in arr, we replace 2 with 10.
// ```

function changeArray(arr, moves){
    for(let i=0 ;i<moves.length; i++){
      if(arr.includes(moves[i][0])){
        let index = arr.indexOf(moves[i][0])
        arr[index] = moves[i][1]
      }
    }
     return arr
   }
   
console.log(changeArray([1, 5, 7, 8], [[1, 3], [7, 9]]))
console.log(changeArray([1, 5, 7, 3, 2], [[1, 4], [5, 8], [7, 9], [3, 11], [2, 10]]))