//1
// console.log(3+2+'7')

//2
// let a=[];
// let b=[];
// console.log(a==b);
// console.log(a===b);

//3
// let a=[];
// let b=a;
// console.log(a==b);
// console.log(a===b);

//4
// let a=[20];
// let b=[20];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);

//5
// let z=[1,2,3,4,5];
// let a={name:"anil"};
// console.log(...z);

//6
// console.log(typeof NaN)

//7
// let data=10 - -10;
// console.log(data);

//8
// const set = new Set([1,1,2,3,4]);
// console.log(set);

//9
// let data = {name:"mumin"};
// console.log(delete data.name)
// console.log(data)

//10
// let data={ name:"mumin"}
// console.log(delete data)

//11
// const data=["mumin","abdul","aziz"];
// const [x,y,z]=data;
// console.log(x,z,y);

// 12
//how to get age without .operator.

// const data={
//     name:"mumin",
//     age:23,
//     skill:"js"
// };
// const {age}=data;
// console.log(age)
// //by using .operator
// console.log(data.age)

//13  how to merge both the obj.
// let data={name:"mumin",age:23,skill:"js"}
// let info={city:"Silchar",mail:"abdulmuminbar@gmail.com"};
// let da={...data,...info};
// console.log(da);

//14 if it is same key in both obj then always prefer next value.
// let data={name:"mumin",age:23,skill:"js"}
// let info={city:"Silchar",skill:"Node"};
// data={...data,...info};
// console.log(data)

//15
// const ans=false || {} || null;
// console.log(ans);

//16
// console.log(Promise.resolve(5))

//17
// let name="abdul";
// function getName(){
//     console.log(name);
//     let name="mumin"
// }
// getName();

// 18
// function sumValues(x,y,z){
// return x+y+z;
// }
// console.log(sumValues(...[1,2,3]))

//19
// const name="step by step code";
// console.log(!typeof name==='object')
// console.log(!typeof name==="string")

//20
// let person={
//     name:"mumin"
// }
// Object.seal(person);
// person.name="abdul"
// console.log(person)

// 21 remove first element
// let data=[5,6,7,8,9];
// data.shift()
// console.log(data)

//22 add from the first
// let data=[1,2,3,4]
// data.unshift(1)
// console.log(data)

// 23 remove from the last
// let data=[1,2,3,4,5];
// data.pop()
// console.log(data)

// 24 add in the end
// let data=[1,2,3,4,5];
// data.push(6)
// console.log(data)

// 25 check any value is odd or even
// let a=32;
// if(a%2==0){
//     console.log('even')
// }else{
//     console.log('odd')
// }

// 26 convert data to boolean false value
// let data="string"
// console.log(typeof !data)

// 27 differnce bet map and forEach
//  map function hamesha kuch na kuch return karega but forEach kuch bhi return nhi karega

// 28
// let data=["abdul","mumin","barbhuiya"];
//  delete data[1];
//  console.log(data)
//  console.log(data.length)
//  data[1]="mum";
//  console.log(data)
// console.log(data.splice(0,1,"mum"))
// console.log(data);
// console.log(data.slice(0,2))
// console.log(data);

// 29
// let a=2;
// setTimeout(()=>{
//     console.log(a)
// },0);
// a=100;

// 30
// console.log(a)
// var a;

// 31
// console.log([[[[]]]])

// 32 how to find os  name

// 33
// function furit(){
//     console.log(name);
//     console.log(price);
//     var name="apple";
//     let price=20;
// }
// furit()

// 34
// for(var i=0;i<3;i++){
//     console.log(i)
//     setTimeout(()=>{
//         console.log(i)
//     },1)
// }

//35
// for(let i=0;i<3;i++){
//         // console.log(i)
//         setTimeout(()=>{
//             console.log(i)
//         },1)
//     }

// 36
// console.log(true)
// console.log(typeof +true);

//37
// let data="size";
// const bird={
//     size:"small",
// }
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

// 38
// let a={name:"abdul"}
// let b;
// b=a;
// a.name="mumin"
// console.log(b.name);

// // 39
// var a;
// let a=20;
// console.log(a)
// // error like Identifier 'a' has already been declared

// //40
// let a=3;
// let b=new Number(3)

// console.log(a==b);
// console.log(a===b);

// 41
// let a;
// let nam={};
// console.log(a)
// console.log(nam);

// 42
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,'2'))

// 43
// let i=0;
// console.log(i++)
// console.log(++i);
// console.log(i);

// 44
// const sum=eval(`10*10+5`)
// console.log(sum)

//45
// const obj={a:"one",b:"two",a:"repeat"}
// console.log(obj)

// 46
// for(let i=1;i<5;i++){
//     if(i===3) continue;
//     console.log(i)
// }

// 47
// const foo = ()=> console.log('First');
// const bar=()=>setTimeout(()=> console.log('second'));
// const baz=()=> console.log('Third');
// bar();
// foo();
// baz();

// 48
// const person ={name:"abdul"};

// function sayHi(age){
//     return `${this.name} is ${age}`

// }
// console.log(sayHi.call(person,23));
// console.log(sayHi.bind(person,21)());

// 49 convert string to array
// console.log([..."mumin"]);

// 50
// const firstPromise= new Promise((resolve,reject)=>{
//     setTimeout(resolve,500,'one')
// })
// const secondPromise= new Promise((resolve,reject)=>{
// setTimeout(resolve,200,'two')
// })

// Promise.race([firstPromise,secondPromise]).then(resolve=>console.log(resolve));

// // 51
// const person={
//     name:"mumin",
//     age:23,
// }
// for(const key in person){
//     console.log(key)
// }

// 52
// console.log(Object.values(100))

// 53
// console.log(3 + 4 + +'5')

// 54
// let data=[1,2,3].map(num=>{
//     if(typeof num=='number')  return;
//     return num*2;
// })
// console.log(data)

// 55
// console.log(!true -true)
// console.log(true + +'10')

// //56
// // Coercion
//  // Nan
//  // This keyword
//  // Bind
//  // Lexical Environment
//  // Closures
//  // Currying
//  // Promises

//  //Promises

//  new Promise((resolve, reject) => {
//    // Promise Syntax
//  })

// //  States of Promise
//  pending
//  fullfilled
//  rejected

//  Handlers
//  .then
//  .catch

// //  .catch handler does not catch errors occured in asynchronous functions like setTimeout

//  const promise =  new Promise((resolve, reject) => {
//     setTimeout(() => {
//        reject("Error")
//     })
//  })

//  console.log(promise);

//   promise.then((result) => console.log(result))
//         .catch((err) => console.log(err))

//   async function handlePromise(){

//     try {
//        const result = await promise;
//        console.log(result);
//     } catch(err){
//        console.log(err)
//     }

//  }

//  handlePromise().catch(err => console.log(err));

//  //Currying

//  // Transfomation of the function of multiple arguments into a function of single arguments in sequence

//   function sum(a, b){
//     return a + b;
//  }

//  function curryFunc(func){
//     return function foo(a){
//        return function bar(b){
//           return func(a, b);
//        }
//     }
//  }

//  curryFunc(sum)(2)(5)

//  const addTwo = curryFunc(sum)(2);
//  const addFive = curryFunc(sum)(5);

//  console.log(addTwo(10));
//  console.log(addFive(10));

//  // Lexical Environment

//  //closuer
//  //functions bundled together with its lexical environment;

//  function foo(){
//     let a = 2;
//     return function bar(){
//        console.log(a);
//     }
//  }

// //  const b = foo();
//  b();

//  //NaN
// //   let a = "Hello"
//  console.log(NaN);

//  //This keyword

//  const obj = {
//     a: "12",
//     hello(){
//        console.log(this);
//     }
//  }

//  const obj2 = {
//     b: "aircampus"
//  };

//  obj.hello.call(obj2); // List of parameters is sent
//  obj.hello.apply(obj2); // Array of parameters is sent
//  const newHello = obj.hello.bind(obj2);
//  newHello();

//  //Coercion

//  let a =  "5";
//  let b = 12;

//  // Implicit Coercion
//  let c = a + b;
//  console.log(typeof c) //String

//  // Explicit Coering
//  let d = Number(a) + b;
//  console.log(typeof d) //Number

//  //Boolena and Logical Coercion
// //  var x = 220;
// //  var y = "Hello";
// //  var z = undefined;

//  // x | | y    // Returns 220 since the first value is truthy

//  // x | | z   // Returns 220 since the first value is truthy

//  // x && y    // Returns "Hello" since both the values are truthy

//  // y && z   // Returns undefined since the second value is falsy

// //  if( x || y ){
// //    console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
// //  }

// re-interview practice
// ----------------------------

// window and this keyword

// var a=10;

// function b(){
//     var x=2;
// }

// console.log(a)
// console.log(window.a)
// console.log(this.a)
// console.log(this===window);

// Higher  Order Function

// A function which takes another function as an argument or  return a function is known as Higher order function.

// eg:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function FilterOdd (){
//     let FilterArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2 !==0){
//             FilterArr.push(arr[i])
//         }
//     }
//     return FilterArr;
// }

// console.log(FilterOdd(arr))

// function FilterEven (){
//     let FilterArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             FilterArr.push(arr[i])
//         }
//     }
//     return FilterArr;
// }
// console.log(FilterEven(arr))

// function FilterFunction(arr,callBack){
//     let FilterArr=[];
//     for(let i=0;i<arr.length;i++){
//         callBack(arr[i]) ? FilterArr.push(arr[i]):null;
//     }
//     return FilterArr;
// }

// function isOdd(x){
//     return x%2 != 0;
// }
// function isEven(x){
//     return x%2 === 0;
// }

// console.log(FilterFunction(arr,isOdd));
// console.log(FilterFunction(arr,isEven));

//callBack function

//A callBack is a function which passed as an argument to another function.The technique allows a function to call another function.

// function sayHello (){
//     console.log("Hello Mumin")
// }
// setTimeout(sayHello,1000);
// console.log("Hey!!")


// clouser

// A clouser is the combination of function bundled together with refference to its surrounding state (the lexical environment). 
// In other words clouser gives you an access of outer function scope from an inner function scope.


// lexical environmemt eg:

// function init(){
//     var name="Mumin"
//     function displayName(){
//         console.log(name)
//     }
//     displayName()
// }
// init()



// // clouser

// function makeFunc(){
//     var name='Mumin';
//     function displayName(){
//         console.log(name)
//     }
//     return displayName;
// }
// const myFunc=makeFunc();
// myFunc();


//IIFE
// An IIFE (immediately Invoked Function Expression)  is  javascript function that runs as soon as it is defined.
// The name IIFE is promted by Ben Alman in his blog. 
// Used of it: IIFE can be used to avoid variable hoisting from within blocks. 

// eg:
// (()=>{
// console.log('hello');
// })()

// using the IIFE result 
// const result=(()=>{
//      const name="Aziz";
//      return name;
// })();
// console.log(result);


// There are 3 ways of writing function in javascript 
// Function Declaration 
// Function Expression 
// Arrow Function 


// // Function Declaration 
// function add(a,b){
//     console.log(a+b);
// }
// add(2,3)


// // Function Expression

// const addfunc = function(a,b){
//     console.log(a+b);
// }
// addfunc(5,5)



// // Arrow Function 

// let addNum=(a,b)=>a+b;
// console.log(addNum(4,3));



// null vs. empty 
// The value of null represents the absence of any  object. while the empty string is an type of string with zero characters.
// If you try to compare the two they are not the same.

// let  varA = null
// let  varC=undefined
//  let varB = ''   /* The empty string */
// if (varA != null && varA != '') {
//     console.log("runs");
//   } console.log("Not runs");

// console.log(varA===varC);



// Currying in javascript

// It is a technique in functional programming, transformation of function of multiple argument into several function of single 
// argument in sequence.

// eg:

// function calVolm(l,b,h){
// return l*b*h;
// }
// console.log(calVolm(2,3,4));

// // eg:
// function CalculateVolm(length){
//     return function(breadth){
//         return function(height){
//             return length*breadth*height;
//         }
//     }
// }
// console.log(CalculateVolm(4)(5)(6));



// use of map

// const arr=[1,2,3]

// function double(x){
//     return x*2;
// }

// const output=arr.map(double);
// console.log(output);



// binary 

// function binary(x){
//    return x.toString(2);
// }
//  const output=arr.map(binary);
//  console.log(output);


// filter function

// const arr=[1,2,3]

// function isOdd(x){
//     return x%2 !=0;
// }

// const output=arr.filter(isOdd)
// console.log((output));



// reduce function 

// function findSum(){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum;
// }
// console.log(findSum(arr));



// const output=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(output);



// ------------------------------------------------------------------*****-------------------------------------------------------------//

// let ischecked=1;
// ischecked=true;
// console.log(ischecked);


// let ischecked=10;
// ischecked=20;
// console.log(ischecked);


// let ischecked='abdul';
// ischecked='mumin';
// console.log(ischecked);

// let ischecked='abdul';
// console.log(ischecked[0],ischecked[1]);

// let ischecked='abdul';
// ischecked[0]='r'
// console.log(ischecked,ischecked[0],ischecked[1]);


console.log(10+10);
console.log("10"+10);
console.log("20"+"10");
console.log("20"-"10");
console.log("20"-10);
console.log("a"-"b");
console.log("a"+"b");

console.log(10*20);
console.log("10"*2);
console.log("b"*2);

console.log(10/2);
console.log("10"/2);
console.log("b"/2);

console.log(!!1);
console.log(!0);
console.log(!!0);
console.log(!'');
console.log({}==={});
console.log(!undefined);
console.log(false || undefined);
console.log(10 &&"dfa");

console.log(!null);

// let news='vasant'

// if(news.includes('vasant')){
//     console.log("yes")
// }else{
//     console.log("no")
// }


// let news='vasant'

// if(news[4]=='n'){
//     console.log("yes")
// }else{
//     console.log("no")
// }


//print even number
// let arr=[1,2,3,4]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
// }



// const sub=function(){
//     console.log("sub")
// }
// sub()
// a()
// const a=function(){
//     console.log("sub")
// }


// print odd even

// let arr=[1,2,3,4,5,6]
// let even=[]
// let odd=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }else{
//         odd.push(arr[i])
//     }
// }
// console.log(even,odd);



// join two arr together

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=arr1.concat(arr2)
// console.log(arr3)


// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=arr1.concat('abdul',arr2,'mumin')
// console.log(arr3)


// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=['cdb',...arr1,'abc',...arr2,'bhhj']
// console.log(arr3)

//difference of concat and spread operator is that,
//  by using spread operator we can add element befor the first arr but in concat we can't


// declaration()
// expression()
// function declaration(){
//     console.log("declaration")
// }

// const expression=function(){
//     console.log("expression")
// }

// we can not call function expression befor
//  but we can call function declaration before


// var name='vasant'
// console.log(age)
// console.log(phone)
// var age=10;
// let phone="123"
// console.log(phone)



// console.log(age)
// console.log(fname)
// var fname="abdul"
// console.log(phone);
// var age=10;
// let phone="123"




// add()
// function add(){
//     console.log("adding");
// }
// setTimeout(()=>{
//     console.log("zero");
// },0)

// sub()
// const sub=function(){
//     console.log("substracting");
// }

// setTimeout(()=>{
//     console.log("vasant");
// },2000)

// setTimeout(()=>{
//     console.log("kumar");
// },2000)



// add()
// function add(){
//     console.log("adding");
// }
// setTimeout(()=>{
//     console.log("zero");
// },0)


// const sub=function(){
//     console.log("substracting");
// }
// sub()

// setTimeout(()=>{
//     console.log("vasant");
// },2000)

// setTimeout(()=>{
//     console.log("kumar");
// },2000)

//IIFE-> Immediately Invoked Function Expression

// (function add(){
//     console.log("adding")
// })();



// Object

// let obj={
//     add(){
//         console.log(this)
//     }
// };
// obj.add()


// let obj={
//     add:function(){
//         console.log(this)
//     }
// };
// obj.add()


// let obj={
//     name: "mumin",
//     add:function(){
//         console.log(this.name)

//     }
// }
// obj.add()


// const mumin=()=>{
//     console.log(this)
// };
// mumin()


// function mumin(){
//     console.log(this);
// }
// new mumin()



// let obj={
//         name: "mumin",
//         add:function(){
//             mumin=()=>{
//                 console.log(this.name)

//             }
//            mumin()
    
//         }
//     }
//     obj.add()




// let words="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati illo, atque veritatis laudantium molestias quod velit ad aut doloremque aperiam. Quasi expedita cupiditate voluptatem ratione minus, corporis quas asperiores."
// let splitword=words.split(" ")
// let [firstword,secondword,...remainingwords]=splitword
    
//     console.log(firstword,secondword,remainingwords)




// let obj={
//     name:"mumin",
//     age:22,
//     color:"black"

// }
// let {name,age,color}=obj;
// console.log(name,age,color)
// console.log(obj.name,obj.age,obj.color)



// let arr=[1,3,4,5]
// arr.splice(1,0,2)
// console.log(arr)



// let arr=[1,3,4,5]
// arr.splice(3,0,6)
// console.log(arr)
