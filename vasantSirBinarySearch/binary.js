// // //  Linear search
// // n is number of element
// // O(n) 
let arr = [1, 43, 5, 67, 68, 87, 65];
let num = 1;
function LinearSearch(arr, num){
  for(let i = 0; i < arr.length; i++){
    if(num == arr[i]){
      return "Number found"
    }
  }
  return "Number Not found"
}
console.log(LinearSearch(arr,num))
// // 150
// // Binary search
// // start = 0;
// // end = 6;
// // mid = 3

// // start = 4;
// // end = 6;
// // mid = 5;

// // start = 6;
// // end = 6;
// // mid = 6
// // log n
// // O(log n) 
// let arr = [1, 5, 76, 87, 98, 99, 102];
// arr = arr.sort((a,b)=>a-b);
// let num = 87;


// // Best condition :- The best complexity a program can give
// // Worst condition :- The worst condition of a program.
    // if(num == arr[mid+1]){
        
    //   } else if( num == arr[mid -1]){
        
    //   }

let arr1 = [1,2,3,4,5];
let sum1 = 5;
for(let i =0 ;i< arr1.length; i++){
  sum+=arr1[i];
}
console.log(sum1)
// reduce function's first parameter is known as accumulator
let sum = arr.reduce((sum, value)=>{
  return sum * value ** 2;
},1);
console.log(sum)

// copyWithin(target, start, end);
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.copyWithin(0, 3, 5))

// let arr = [1,2,3,4];
// for(let element of arr){
//   console.log(element);
// }

// let obj = {
//   a :1,
//   b: 2,
//   c : 3
// }
// let keys = Object.keys(obj);
// for(let element of keys){
//   console.log(element);
// }

























