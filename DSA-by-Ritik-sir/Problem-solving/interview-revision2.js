// Types of function

// function statement

//func defination
// function sayHello(para){
//     console.log('hello',para);

    // return 'mumin'
// }
// func invocation
// sayHello('abdul')
// console.log("```````````");

// let rVal=sayHello()
// console.log('rval',rVal);


// function are first class citizens:
//function are treated as a variable

// function expression
// let fnContainer = function fn(){
//     console.log("function expression");
// }
// fnContainer()

// Anonymous function: function which have no name in it.
// let fnCont = function (){
//     console.log("Anonymous function");
// }
// fnCont()



// IIFE: immediately invoked function expression 

// (function functn(){
//     console.log("IIFE Function");
// })()



// First class citizen 
// function are treated as a variable

// 1.assignment -> variable can be passed as a parameter
// 2.function can be passed a parameter -> hof,callback
// variable can be return from a function
// 3. function can be return from a function -> clouser


// function sayHello(para){
//     console.log('hello',para);
//     return "mumin"
// }
// function smaller(){
//     console.log('smaller');
// }
// sayHello([1,2,3])
// let rVal=sayHello(smaller)
// console.log(rVal);


function outer(){
    console.log("outer function");
    return function inner(){
        console.log("inner function");
    }
}
let rVal=outer();
console.log("rVal",rVal);
rVal()
