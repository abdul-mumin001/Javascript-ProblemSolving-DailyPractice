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


// Operators 

// 1. Arithmatic Operators - +, -, *, /, %
// 2. Relational Operator - <, >, <=, >=, ==, ===, !=
// 3. Logical Operator - &&, ||, ! 
// && 
// t && t = t 
// t && f = f 
// f && t = f
// f && f = f

// ||
// t || t = t
// t || f = t
// f || t = t
// f || f = f

// !
// !t = f
// !f = t

// boolean values - true(1), false(0) 

// let a = 10 === "10" && 3 > 5;

// console.log(typeof(a));

// if(a) {
//     console.log("Hello");
// }




// Class and Object

// class - Type of Function

// Class - Blueprint/Design of an object 
// this -> Refers to the current calling object 

// class Student {
//     // constructor() {
//     //     this.name = "Rahul";
//     //     this.age = 20;
//     //     this.id = 2345;
//     // }
    
//     constructor(name, age, id) {
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }
// }

// class Product {
//     constructor(name, description, price, pid, brand, ratings) {
        
//     }
// }

// const s = {
//     name: "Rahul",
//     age: 20,
//     id: 2345
// };

// const s2 = {
//     name: "Rohan",
//     age: 20,
//     rollid: 2346
// }

// const s = new Student();
// const s2 = new Student("Rahul", 45, 2347);
// const s3 = new Student("Rohan", 23, 3456);

// console.log(s2, s3);

// const s = {
//     name: "Rahul",
//     age: 20
// }

// console.log(s.name);

// const a = {
//     name: "Rahul"
// }

// console.log(a);

// Abstraction, Encapsulation, Inheritance, Polymorshism 

// function fun() {
//     let a = 20;
//     let b = 30;
    
//     return a+b;
// }

// function solve(a) {
//     const val = a();
    
//     console.log(val);
// }

// solve(fun);

// function fun(work) {
//     let a = 20;
//     let b = 30;
    
//     return work(a,b);
// }

// function solve(fun) {
//     const val = fun(function work(a, b) {
//         return a - b;
//     })
    
//     const val2 = fun(function work(a, b) {
//         return a + b;
//     })
    
//     console.log(val, val2);
// }

// solve(fun);

// Functions are Objects 

// Callbacks - Functions passed into another function as argument 


// Async Await 

// Promises - Pending, Resolved, Rejected 

// const a = new Promise((resolve, reject) => {
//     let x = 10;
    
//     if(x > 5) {
//         resolve();
//     }
//     else {
//         reject();
//     }
// })

// a.then(() => {
//     console.log("Resolved");
// }).catch(() => {
//     console.log("Reject");
// })

// Async function - Takes time to run

// function afterPurchase(state) {
//     console.log(state);
// }

// const payment = new Promise((resolve, reject) => {
//     let x = 10;
    
//     if(x > 5) {
//         // Success
//         resolve();
//     }
//     else {
//         // Fail
//         reject();
//     }
// })

// payment.then(() => {
//     afterPurchase("Success");
// }).catch(() => {
//     afterPurchase("Failed");
// })

// Fall Through

// switch (15)  {
//     case 10:
//         console.log("Hello");
//     case 15:
//         console.log("Hello again");
//     default: 
//         console.log("Hello 2");
// }

// function setTimeout(fun, time) {
//     // Logic to wait for the specified time
//     fun();
// }

// setTimeout(() => {
//     console.log('Hello');
// }, 3000);

// async function abc() {
//     console.log("Inside function");
    
//     let data = await fetch('https://api.github.com/users');
    
//     console.log(data);
    
//     let users = await data.json();
    
//     console.log(users);
    
//     return users;
// }



// const data = await abc();

// console.log(data);
// abc().then(data => {
    
// }).catch(err => {
    
// });


// const abc = new Promise(async (resolve, reject) => {
//     console.log("Inside function");
    
//     let data = await fetch('https://api.github.com/users');
    
//     console.log(data);
    
//     let users = await data.json();
    
//     console.log(users);
    
//     resolve(users);
// })



// fetch('https://api.github.com/users').then((data) => {
//     console.log(data);
// }).catch(() => {
    
// })

// Promise -> A function that time to execute 


// async function abc() {
//     console.log("Inside function");
    
//     // fetch('https://api.github.com/users').then(async (data) => {
//     //     console.log(data);
//     //     let users = await data.json();
    
//     //     console.log(users);
//     // }).catch(() => {

//     // }) ;
    
//     const data = await fetch("https://api.github.com/users");

//     console.log(data);
    
//     let users = await data.json();
    
//     console.log(users);
    
//     return users;
// }

// abc().then(data => {

// }).catch(err => {

// });

// console.log(data);



async function abc() {
    console.log("Inside function");
    
    let data = await fetch('https://api.github.com/users');
    
    console.log(data);
    
    let users = await data.json();
    
    console.log(users);
    
    return users;
}

const data = await abc();

console.log(data);
