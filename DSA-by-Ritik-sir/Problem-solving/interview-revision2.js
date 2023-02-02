// // Types of function

// // function statement

// //func defination
// // function sayHello(para){
// //     console.log('hello',para);

//     // return 'mumin'
// // }
// // func invocation
// // sayHello('abdul')
// // console.log("```````````");

// // let rVal=sayHello()
// // console.log('rval',rVal);


// // function are first class citizens:
// //function are treated as a variable

// // function expression
// // let fnContainer = function fn(){
// //     console.log("function expression");
// // }
// // fnContainer()

// // Anonymous function: function which have no name in it.
// // let fnCont = function (){
// //     console.log("Anonymous function");
// // }
// // fnCont()



// // IIFE: immediately invoked function expression 

// // (function functn(){
// //     console.log("IIFE Function");
// // })()



// // First class citizen 
// // function are treated as a variable

// // 1.assignment -> variable can be passed as a parameter
// // 2.function can be passed a parameter -> hof,callback
// // variable can be return from a function
// // 3. function can be return from a function -> clouser


// // function sayHello(para){
// //     console.log('hello',para);
// //     return "mumin"
// // }
// // function smaller(){
// //     console.log('smaller');
// // }
// // sayHello([1,2,3])
// // let rVal=sayHello(smaller)
// // console.log(rVal);


// function outer(){
//     console.log("outer function");
//     return function inner(){
//         console.log("inner function");
//     }
// }
// let rVal=outer();
// console.log("rVal",rVal);
// rVal()



// // What is First Class Citizen in JavaScript ?

// // If any programming language has the ability to treat functions as values, to pass them as arguments and to return 
// // a function from another function then it is said that programming language has First Class Functions and the 
// // functions are called as First Class Citizens in that programming language.


// // 1. Ability to treat functions as values:

// var greet = function() {
// 	console.log("Welcome to BVEC");
// }
// greet();


// // 2. Ability to pass a function as arguments:


// function teacher(){
// 	return "Teacher";
// }

// function student(){
// 	return "Student";
// }

// function greet(user){
// 	console.log("Welcome", user());	
// }

// // Prints "Welcome Teacher"
// var message = greet(teacher);

// // Prints "Welcome Student"
// var message = greet(student);



// // 3. Ability to return a function from another function: 

// var greet = function(){
// 	return function(){
// 	console.log("Welcome to BVEC");
// 	}
// }
// greet()();









// Promises in js 

// Benefits of Promises :
// Improves Code Readability
// Better handling of asynchronous operations
// Better flow of control definition in asynchronous logic
// Better Error Handling

// A Promise has four states: 
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected

// A promise can be created using Promise constructor.
// Syntax:
// var promise = new Promise(function(resolve, reject){
//      //do something
// });
// Parameters :
// i. Promise constructor takes only one argument which is a callback function (and that callback function is also referred 
// 	as anonymous function too).
// ii. Callback function takes two arguments, resolve and reject
// iii. Perform operations inside the callback function and if everything went well then call resolve.
// iv. If desired operations do not go well then call reject

// Example:


var promise = new Promise(function(resolve, reject) { 
	const x = "aircampus"; 
	const y = "aircampus"
	if(x === y) { 
	  resolve(); 
	} else { 
	  reject(); 
	} 
  }); 
	  
  promise. 
	  then(function () { 
		  console.log('Success, You are a part of aircampus'); 
	  }). 
	  catch(function () { 
		  console.log('Some error has occurred'); 
	  });















	//   Async/Await Function in JavaScript

	// Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking 
	// the execution thread. It operates asynchronously via the event loop. Async functions will always return a value. 
	// It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise 
	// which is resolved with its value.


	const getData = async() => {
		var data = "Hello World";
		return data;
		}
		  
		getData().then(data => console.log(data));

