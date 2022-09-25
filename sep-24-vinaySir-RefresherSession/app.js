// 1. How to print in JS.
// console.log()
// console.warn()
// console.error()
// console.table()

// console.log(typeof console) 

// console["log"]("Hello world")

// 2. Operators :-
// 1. Arithmethic operator. unary, binary, ++,--, +,-,*,/,%,**
// 2. Assignment :- = , += ,-=, *=, /=, %=, **=
// 3. Comparision , Relational Operator :- ==, ===, != ,!== , >= ,<=, <, > 
// 4. Logical :- &&, ||, ! 
// 5. Bitwise :- &, |, ^, ~, << , >>, >>>
// 5. Special :- Ternery, typeof, `` 


// 8 -> binary (0,1) -> 111 

// Bitwise and
// 5 & 2 -> 0101 & 0010 -> 
//   0101
//   0010
//   0000 -> 0
// console.log(5&1)
 
// 5 & 1 -> 0101 & 0001 
// 0101
// 0001
// 0001 -> 1

// Bitwise OR
// 5 | 1 -> 0101 | 0001
// 0101
// 0001
// 0101 -> 5
// console.log(5 | 1)

// Bitwise NOT
// ~5 -> 0101 -> 1010 -> 10 
// console.log(~ 5)

// Bitwise XOR
// 5 ^ 1 -> 0101 ^ 0001 ->
// 0001
// 0101
// 0100 -> 4 
// console.log(5 ^ 1)

// Zero filled Left shift
// 5 << 1 :- 0101 << 1 -> 1010 -> 10
// // console.log(5 << 1)
// 1010 -> 10

// Zero filled Right Shift
// 0010 -> 2
// console.log(5 >> 2)
// 5
// 0001 -> 1

// let var const 
// Keywords :- They are predefined identifiers in JS
// identifiers :- Name of any variable function etc 
// let :-  cannot redeclared but can reassigned :- block scope
// const :- cannot be redeclared and reassigned :- block scope
// var :- redeclared and reassign :- Global Scope
// if() {
//  Its a new Block 
// }
// Block ( {} ) :- Block is something which is written inside Curly braces or we can it makes a new Space to write some code.

// if , else, for, switch, while, do-while, try, catch, then, catch, function 

// let a = 5
// a = "Vinay";

// const pi = 3.14

// Data-types :-

// 1. Boolean :- true / false
// 2. Null 
// 3. undefined 
// 4. Number :- 1 , 1.0 
// 5. String :- "@Vinay"
// 6. Symbol :- 
// 7. Object
// 8. BigInt


// let a;
// a = null
// a = 5
// a = "Vinay"
// // a = []
// // a = Input()
// console.log(a)

// a = Null

// let a = Symbol('hello')
// let b = Symbol('hello')
// console.log(a.hello) 
// console.log(b) 

// let a = "Vinay" 
// let b = "Vinay" 
// console.log(a == b) 



// let a = 100034233459345237529872345873534520375325234
// console.log(a)

// 5:30 - Infinite
// 5-7 -> 7-8 -> 8-12
// function(recursion, callstack, callbacks, callback queue, GEC, FEC, Types of function), array (linear, binary, sorting 4 algos ) 2-D array, object, linked list, stack, queue, Optional(Automation project)
// Frontend, Backend, Cloud -> 

// if-else :- 
// if(condition) {
//   true hone par ye kaam karo
// } else {
//   false hone par ye kaam karo
// }

// switch case :-
// switch(expression) {
//   case :
//     break;
//   default:
//     If no case pass than run this by default
// }

// let i = Math.random() * 10;
// // console.log(i);
// i = Math.floor(i)

// switch(i) {
//   case 1 :
//     console.log()
// }

// tic-tok
// 0 X

// for(declare and initialize; condition, jump ) {
//   body
// }

// while(condition) {
//   body + jump;
// } 

// do{
//   body + jump 
// } while(condition)


// let i = 11
// while(i<10) {
//   console.log(i)
//   i++
// }

let i = 11
do{
  console.log(i)
  i++;
  }
  while(i<10) 



//  Q . You are given a sorted array and a target. Return the index of target if it exists in the array, 
//   if target does not exist in array return the index of immediate smallest element to target and if the
//    smallest does not exist return -1.



function binarySearch(arr, target){
  let start=0;
  let end=arr.length-1;
  while(start<=end){
    let mid=Math.floor((start+end)/2);

    if(arr[mid]==target){
       return mid;
    }else if(arr[mid]<target){
       start=mid+1;
    }else{
       end=mid-1;
    }
      if(target>arr[end] && target<arr[start]){
        return end;
   }
    
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5],3))
console.log(binarySearch([1, 2, 3, 4, 5],7))

