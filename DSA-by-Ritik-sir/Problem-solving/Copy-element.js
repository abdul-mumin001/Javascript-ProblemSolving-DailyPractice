// Q Given an array, copy the 3rd element to the 2nd element of the array if the size of array is less than 
// 5 else copy all the elements from 3rd element to 2nd element of the array.

// ### Input Format
// An array ```arr```

// ### Output Format
// If arr.length < 5 - Copy the 3rd element to 2nd and then return the updated array

// If arr.length >= 5 - Copy all the elements from 3rd element to the end of array to 2nd element.

// Input 1:
// ```
// [1, 2, 3]
// ```
// Output 1:
// ```
// [1, 3, 3]
// ```
// Input 2:
// ```
// [2, 5, 10, 7, 5, 19, 10]
// ```
// Output 2:
// ```
// [2, 10, 7, 5, 19, 10, 10]
// ```

function copyElement(arr){
    if(arr.length<5){
      return arr.copyWithin(1,2)
    }else{
      return arr.copyWithin(1,2)
    } 
 }
 console.log(copyElement([1, 2, 3]))
 console.log(copyElement([2, 5, 10, 7, 5, 19, 10]))