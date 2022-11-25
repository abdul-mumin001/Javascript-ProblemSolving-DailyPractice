// variables 
// Data - any piece of information 
// numbers, characters, text, decimal numbers, boolean 

// Other programming language C++, Java - Data Type - int, double 

// JS 

// let a = 15;
// let s = "Hello";

// a = 20;

// console.log(typeof(s));

// const c = 100;

// console.log(c);

// const ob = {
//   name: "Rahul",
//   age: 25
// }

// ob.name = "Rohan";
// ob.lastname = "kumar";
// console.log(ob);

// const arr = [10, 20, 30];

// arr.push(40);

// console.log(arr);

// +, -, *, /, %

// const a = "10";
// const b = "20";

// console.log(a+b); // String Concatenation 

// Default Data Type in JS -> String 

// var - Functional Scope, let and const - Block Scope {}
// function - Functional Scope

// Hoisting 
// Memory wastage/leakage

// Global Exceution Context 

// console.log(a);

// var a = 15;
// let b = 20;

// // console.log(a);

// // fun();

// function f1() {
    
//     console.log(b);
    
//     function fun() {
//         {
//           console.log(a);
//           {
//             var a = 20;
//             let b = 30;
//           }
//           console.log(a);
//         }
//     }
//     fun();
// }

// f1();

// Arrow Function 

// let f = () => { // Not get Hoisted
//     console.log("Hello");
// }

// f();
// f();

// var f = function() { // Not get Hoisted
//     console.log("Hello world");
// }

// console.log(a);

// console.log(a, b);

// Rest and Spread Operator 

// function fun(name, dob, ...obj2) {
//     console.log(name, dob, obj2);
// }

// fun("Ritik", "9/12/2001", 23, 56, "Text");

// fun();

// Rest and Spread operator

// const val = [1, 2, 3, 4, 5];

// // // // Spread operator
// const val2 = [10, 20, ...val];

// console.log(val2);

// const ob = {
//     name: "Rahul",
//     age: 23
// }

// const obj2 = {
//     degree: "BTech",
//     ...ob
// }

// console.log(obj2);

// // Rest(Remaining) operator

// const [v1, ...v3] = [1, 2, 3];

// console.log(v1, v3);

// Destructing of obj, use variable names same as key names

// const ob = {
//     name: 'rahul',
//     age: "23",
//     degree: "Btech"
// }

// const { name, ...obj2 } = ob;

// console.log(name, obj2);

// fun({
//     name: "Rahul", 
//     age: 20, 
//     rollno: 34,
//     class: "6A", 
//     dob: "20/04/2002"
// })

// const pr = [20, 30, 23, 20];
// const pr2 = [32, 45, 67];

// const p = [...pr, ...pr2];

// Object Oriented Programming Language - Java, C++

// Result of a relation, logical expression 