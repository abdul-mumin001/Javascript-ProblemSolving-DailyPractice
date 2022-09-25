// function(recursion, callstack, callbacks, callback queue,HOF, GEC, FEC, Types of function), array (linear, binary, sorting 4 algos ) 2-D array, object, linked list, stack, queue, Optional(Automation project)

// Types of functions 

// let num  = 5;
// let fact = 1;
// for(let i = 1;i <= num ; i++){
//   fact *= i;
// }
// console.log(fact);

// num  = 3;
// fact = 1;
// for(let i = 1;i <= num ; i++){
//   fact *= i;
// }
// console.log(fact);

// num  = 6;
// fact = 1;
// for(let i = 1;i <= num ; i++){
//   fact *= i;
// }
// console.log(fact);

// function factorial (num) {
//   let fact = 1;
//   for(let i = 1;i <= num ; i++){
//     fact *= i;
//   }
//   return fact
// }


// console.log(factorial(5))
// console.log(factorial(3))
// console.log(factorial(6))
// console.log(factorial(7))

// function factorial (num) { // function declaration
//   let fact = 1;
//   for(let i = 1;i <= num ; i++){
//     fact *= i;
//   }
//   return fact;
// }

// Function Declaration :- Declaring any function using function keyword.
// Function Definition :- The code which is written inside curly braces or a function's block is known as function Definition. Function Definition tells us what that function is doing.
// Function's parameters :- Anything written inside function's paranthesis are known as function's parameters.
// Function's return :- The thing a function return is known as function's return.


// factorial(5); // Function calling
// Function calling :- Calling a function with its name and passing the required parameters is known as function calling.


// let num1 = 98765;
// let num2 = 67895;
// let num3 = 34567;

// let rev1 = 0;

// while(num1!=0){
//   let rem = num1 % 10;
//   num1 = Math.floor(num1/10);
//   rev1 = rev1 * 10 + rem;
// }
// console.log(rev1);

// let rev2 = 0;
// while(num2 != 0) {
//   let rem = num2 % 10;
//   num2 = Math.floor(num2/10);
//   rev2 = rev2 * 10 +rem;
// }
// console.log(rev2);

// let rev3 = 0;
// while(num3 != 0) {
//   let rem = num3 % 10;
//   num3 = Math.floor(num3/10);
//   rev3 = rev3 * 10 +rem;
// }
// console.log(rev3);



// function revANum(num) {
//   let rev = 0;
//   while(num!=0){
//     let rem = num % 10;
//     num = Math.floor(num/10);
//     rev = rev *10+rem;
//   }
//   console.log(rev)
// }

// revANum(num1)
// revANum(num2)
// revANum(num3)

// Pure function :- A pure function is a function which takes all the required arguments from the function itself as well as do not access any data from outside the block of that function and return something from it.

// Inpure function :- If a function is not a pure function than it is a impure function

// let num = 2342452;
// function revANum(num) {
//   let rev = 0;
//   while(num!=0){
//     let rem = num % 10;
//     num = Math.floor(num/10);
//     rev = rev *10+rem;
//   }
//   console.log(rev)
// }

// console.log(revANum(num));
// revANum(num);


// let arr = [5,43,5,32,43]
// function sorting(arr){
//   return arr.sort((a,b) => a-b)
// }

// let arr2 = sorting(arr)
// console.log(arr2)
// console.log(arr);

// Arrow function :- Arrow function 

// let num = 2342452;
// let revANum = (num) => {
//   let rev = 0;
//   while(num!=0){
//     let rem = num % 10;
//     num = Math.floor(num/10);
//     rev = rev *10+rem;
//   }
//   return rev;
// }

// Annonymous function :- Annonymous function is a function who doesn't have any name;

// (num) => {
//   console.log(num)
// }

// setTimeout(() => {
//   console.log("Hello World");
// }, 1000);

// IIFE :- IIFE function is function who calls itself. Immedietly Invoked function expression.

// (function (num, num1){
//   console.log(num1, num);
// })(5, 10);

// Difference between Normal function and arrow function.
// 1. Syntax of both the functions are different.




// let arr = "abc";
// console.log("Hello world");
// let arr1 = 234;

// let num = Number(arr1);
// console.log(num);
// let num1 = 5;
// function fact(num) {
//     let fact = 1;
//     while(num!=0){
//         fact*=num;
//         num--;
//     }
//     return fact;
// }

// console.log(fact(num1));

// | 5 |  |  |  |  |  |  |

// num, num1

// Recursion :- Function calling itself again and again is known as recursion.

// function printHello(num){
//     if(num != 0) {
//         console.log("Hello")
//         return printHello(num-=1);
//     }
//     return
// }

// printHello(10);

// Find the factorial of a number.

// num = 5 -> 4 -> 3 -> 2 -> 1 -> 0
// fact = 1 -> 5 -> 20 -> 60 -> 120 -> 120
// fact = 120 * 1
// function fact(num) {
//     let fact = 1;
//     while(num!=0){
//         fact*=num;
//         num--;
//     }
//     return fact;
// }
// console.log(fact(5))

// Stack 1 => factorial(5)
// num = 5
// return 5 * factorial(4) -> 5 * 24 => 120

// Stack 2 => factorial(4)
// num = 4
// return 4 * factorial(3) -> 4 * 6 => 24

// // Stack 3 => factorial(3)
// num = 3
// return 3 * factorial(2) -> 3 * 2 => 6

// // Stack 4 => factorial(2)
// num = 2
// return 2 * factorial(1) -> 2 * 1 => 2

// Stack 5 => factorial(1)
// num = 1
// return 1 * factorial(0) -> 1 * 1 => 1

// // Stack 6 => factorial(0)
// num = 0
// return 1

// function factorial(num) {
//     if(num == 0) {
//         return 1
//     }
//     return num * factorial(num-1)
// }
// console.log(factorial(5));


// // HOF :- Higher Order Functions
// If a function calls as well takes parameter as a function than that function is known as HOF

// setTimeout((){

// },1000)


// func = () => {
//     console.log("Higher order function calls me. Higher order function mujhe call kar raha hai...")
// }

// function meraMyHigherOrderFunction (func) {
//     console.log("Hello I am a Higher Order function. ");
//     func();
// }

// meraMyHigherOrderFunction(()=>{    
//     console.log("Higher order function calls me. Higher order function mujhe call kar raha hai...")
// });

// Event Loop 


// Callback :- When a function calls a function so the function which is called is known as callback.

// function func() {
//     console.log("Hello")
// }
// function meraMyHigherOrderFunction (func) {
//     console.log("Hello I am a Higher Order function. ");
//     func();
// }

// meraMyHigherOrderFunction(func);
// Annonymous function inside meraMyHigherOrderFunction is a callback.

// Function which is called inside a function is known as callback


// Callback Queue :- Call-back queue is the queue where all the callback functions are executed parallely.

// console.log("Hello");

// 5ms is the time taken by code to run. Than 2ms are already passed

// setTimeout(()=>{
//     console.log("Hello world 650");
// },2)

// setTimeout(()=>{
//     console.log("Hello world");
// }, 0)

// setTimeout(()=>{
//     console.log("Hello world 55");
// }, 0)


// console.log("Hello 2");

// Output:- 
// Hello
// Hello 2
// Hello world 55
// Hello world 650
// Hello world 

// Callback Queue :- 
// () => {"Hello world"} , 7ms
// () => {"Hello world 55"}, 0 ms
// () => {"Hello world 650"} , 2 ms 

// Event Loop :- Event Loop is responsible to handle the Flow of the Code means it will put all the callbacks into callback queue. It will run the main stack code. It is responsible to handle the callstack.

// 1. 20ms -> 20ms
// 2. 40ms -> 20+20ms = 40
// 3. 60ms -> 40ms + 20ms = 60ms

// A -> B
// 1. 50sec
// 2. 49sec
// 3. 30sec
// 4. 45sec


// Array :- [] In JS, The collection of elements is known as array and the elements can have any type.

// The elements of array are written inside [] (Square Brackets) seperated by comma (,).

// let arr = [1, 2, 3, 5];
        //    0  1  2  3  4  5 -> index 
// console.log(arr.length)
// The first index of an array is 0 and the last index is length-1;
// let ans = arr.sort(); 
// console.log(ans)
// The first parameter of the reduce function is known as accumulator 
// let callBackOfReduce = (sum,ele)=>{
//     return sum+ele;
// }
// arr = arr.reduce(callBackOfReduce,0);
// console.log(arr);

// let sum = 0;
// for(let i =0 ; i< arr.length; i++) {
//     sum = callBackOfReduce(sum, arr[i])
// }
// console.log(sum);


// let callBackOfFilter = (ele) => {
//     return ele % 2 == 0
// }
// let ans = arr.filter(callBackOfFilter);
// console.log(ans)

// let newArr  = [];
// for(let i = 0 ; i< arr.length; i++) {
//    if(callBackOfFilter(arr[i])) {
//     newArr.push(arr[i]);
//    }
// }
// console.log(newArr)


// let callBackOfMap = (ele) => {
//     return ele *2
// }
// let newArr = [];
// for(let i = 0;i <arr.length; i++) {
//     newArr.push(callBackOfMap(arr[i]))
// }
// console.log(newArr)


// console.log(arr);


// Linear Search :- Linear search is the method of searching element in array.
// It is brute force method.
// let arr = [4,5,2,3,6,7,8]

// function linearSearch(arr, element) {
//     for(let i = 0; i< arr.length ; i++) {
//         if(arr[i] == element) {
//             return "Element Found at index " + i;
//         }
//     }
//     return "Element is not Present in the Array"
// }

// console.log(linearSearch(arr,22))

// Binary Search :- Binary search is the searching algo for finding element in a sorted array.
// The basic requirement of the binary search is that the elements of the array should be sorted.
    //    0 1 2 3 4 5 6 7 8
// arr = [1,2,3,4,5,6,7,8,10]
// element = 11;
// start = 0 -> 5 -> 7 -> 8 -> 9
// end = 8

function binarySearch(arr, element) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == element) {
            return mid;
        } else if(arr[mid] < element) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1
}
let arr = [1,2,3,4,5,6,7,8,10];
console.log(binarySearch(arr, 11));
// LowerBound :- The first element of an Array.
// UpperBound :- The last element of an Array.


















