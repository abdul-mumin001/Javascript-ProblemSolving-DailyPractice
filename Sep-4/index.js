// 1. Global Execution context (GEC).
// 2. Function Execution context (FEC).
// 3. Call Stack - Done.
// 4. Event Loop.
// 5. Callback queue.


// 0. Recursion.
// function calling itself is known as recursion.
// for(let i=0; i<=10; i++){
//   console.log("Hello",i);
// }


// function print_hello(){
//   console.log("Hello");
//   print_hello();
// }

// print_hello();


// function print(num){ // 10
//   if(num==10){
//     return 
//   }
//   console.log("Hello", num);
//   print(num+1);
  
// }
// print(0); 
// let fact = 1;
// for(let i = 1; i<= 5; i++){
//   fact *= i;
// }
// console.log(fact)

// function fact(num){
//   return num == 1 ? 1 : num*fact(num-1);
// }

// let ans = fact(5)
// console.log(ans);



// function fact(num){
//     // if(num==1){
//     //     return 1;
//     // }
//     let fact = 1;
//     for(let i = 1;i<= num; i++)
//     fact*=i;
//     return fact
//     // return num * fact(num-1);
// }
  
// let ans = fact(5) // 120

// console.log(ans); // 120;

// Call Stack :- 

// 1. fact(5) :- num = 5; return 5 * 24 = 120;
// 2. fact(4) :- num = 4; return 4 * 6 = 24;
// 3. fact(3) :- num = 3; return 3 * 2 = 6;
// 4. fact(2) :- num = 2; return 2 * 1 = 2;
// 5. fact(1) :- num = 1; return 1;


// 1. Stack:- First in Last Out(FILO). Last in first Out (LIFO).
// 2. Queue:- First in First Out(FIFO). Last in Last Out (LILO).



// Count sum of digits of a number :- 786958 = 7+8+6+9+5+8 = 43

// function sum(num){
//     let rem = num % 10;
//     if(num == 0) return 0;
//     return rem + sum(Math.floor(num/10));
// }
// let ans = sum(786958); // 43
// console.log(ans); // 43

// Call Stack :- 

// 1. sum (786958) :- num = 786958; rem = 8; return 8 + 35 = 43;
// 2. sum (78695) :- num = 78695; rem = 5; return 5 + 30 = 35;
// 3. sum (7869) :- num = 7869; rem = 9; return 9 + 21 = 30;
// 4. sum (786) :- num = 786; rem = 6; return 6 + 15 = 21;
// 5. sum (78) :- num = 78; rem = 8; return 8 + 7 = 15;
// 6. sum (7) :- num = 7; rem = 7; return 7 + 0 = 7;
// 7. sum (0) :- num = 0; rem = 0; return 0;


// var a = 50;
// console.log(a);
// function hello(){
//     return "Hello " + "World";
// }

// hello();

function sum(num){
    let rem = num % 10;
    if(num == 0) return 0;
    return rem + sum(Math.floor(num/10));
}
let ans = sum(786958); // 43
console.log(ans); // 43


// GEC :- Global Execution Context :- When our script file goes to a JS engine it creates a Execution Context which is known as Global Execution context. It includes the essential data related for our program to run. 
// FEC :- Function Execution Context :- When we call a function than the JS engine creates a seperate Execution context for the function which is known as Function Execution context. It includes the essential data related to our function to run.

// Execution Context :- Execution Context Object (ECO) .

// let a = 0;
// let b = 30;
// function abc(){};
// abc();
// 1. Create Phase :- 
//      a. Variables objects create :- Variable's memory is allocated and values are intialized as undefined. 
//      b. Scope chaining.
//      c. this keyword :- this keyword stores value related to position where it is called. It changes according to the scope.
// 2. Execution Phase:- 
// console.log(this);
// function a(){
//     console.log(this)
// }
// a()
// let b = "Hello";
// if(b == "Hello"){
//     let b  = 30;
//     console.log(b);
//     for(let i = 1;i<=10;i++){
//         console.log(b);
//         if(5<10){
//             console.log(b);
//         }
//     }
// }
// Global -> if(a) -> for -> if(5);

// function abc(){
//     let a = 45;
//     console.log(a)
// }

// Node js engine 
// Google chrome :- v8 engine.
// Firefox :- Spider Engine.
// EDGE :- Blink Engine -> v8 engine.
// Internet Explorer :- Trident MSHTML engine. 


// JS History :- Brendan Eich :- 10 days :- live + Java +  => JavaScript.
// First name of JS :- Mocha -> LiveScript :- M-Firefox :- JavaScript.
// EchmaScript :- ES6 -> 2015.

// NodeJS :- V8 engine -> NodeJS .
// let c = "Vinay";





























