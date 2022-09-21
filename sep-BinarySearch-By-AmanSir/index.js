// SEARCHING ALGORITHMS: 

// 1. Linear Search
// 2. binary search 

// 1 + 1 + 1 + 1 + 1 + .... + 1 = n 

// Time Complexity, TC:- Time Taken by the code written. 
// unit = consider it as 1. 
// Write:- O(TC); // O(n) 
// Read:- O of TC; // O of n;

// 1. there is a string of length n. 
// for() // to print every char of the string. n times => O(n). 

// if (a > 6) { // O(1);

// }

// a = 5;
// b = 6;
// c = 3;
// O(1)


// whenever we calculate TC, we calculate it in a generic format. 

function indexOf(arr, value, start) {

  if(start == undefined) { // O(1)
      start = 0; // O(1)
    }

  var indexOfEle = -1; // O(1)
  for(var index = start; index < arr.length; index++) { // O(arr.length)
    if(arr[index] == value) {// O(1)
      return index;
    }
  }

  return indexOfEle; 
//   O(1)

}

// O(1) + O(1) + O(arr.length) = O (arr.length)

// TC = O(n) => n is the length of array. 

// While calculating the TC => always take the maximum value from it. 


let n=5;
let m=5;
for(let i = 0; i < n; i++) {  // O(n*m)
  for( let j = 0; j < m; j++) { // O(m)
    console.log(i,j); // O(1)
  }
}

// O(m) + .... + O(m)  [n times]  = O(n*m)


// 2 + 2 + 2 + .... + 2 = 20 = 2 * 10

// Multiplication == repeated addition & addition
// Division == repeated subtraction.

// 3 + 3 + 3 = 3*3

// O(n * m);

function isEvenNo(num) { // O(1)
  if(num%2 == 0) {
    return true;
  } 
  return false;
}

function isEvenNo(num) { // O(n) n == num
while(num > 0) {
  num = num - 2;
}
if(num == 0) {
  return true;
} else {
  return false;
}
}

console.log(isEvenNo(5));
console.log(isEvenNo(4));




// Q1:- Use two pointer approach. Given a binary array( array contains only O and 1)
// we have to sort the array OR we have to separate 0 and 1 like 0 should be in left of the
// array and 1 should in right of the array. 

// example:- Input = [1,1,0,1,0];
// output = [0,0,1,1,1]

// 1. Approaches. 
  // separate 0 and 1. 

// Approach 1 

function separate0sAnd1s(arr) {
  var countOf0 = 0; // O(1)
  for( var index = 0 ; index < arr.length; index++) { // O(arr.length)
    if(arr[index] == 0) {
      countOf0++;
    }
  }

  for(var index = 0; index < countOf0; index++) { // O(countOf0)
    arr[index] = 0;
  }

  for(var index = countOf0; index < arr.length; index++) { // O(countOf1)
    arr[index] = 1;
  }

  return arr; // O(1)
}
console.log(separate0sAnd1s([1,1,0,1,0]))

// TC
// O(1) + O(arr.length) + O(countOf0) + O(countOf1) + O(1);

// O(1 + arr.length + countOf1 + countOf0 + 1) ;
// O( 2 +  arr.length + arr.length);
// O( 2 + 2* arr.length);
// O(2*arr.length) => O(n) => n is arr.length;
