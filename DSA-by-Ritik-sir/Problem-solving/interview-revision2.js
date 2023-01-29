// Types of function

// function statement

//func defination
function sayHello(para){
    console.log('hello',para);

    // return 'mumin'
}
// func invocation
sayHello('abdul')
// console.log("```````````");

// let rVal=sayHello()
// console.log('rval',rVal);


// function are first class citizens:
//function are treated as a variable

// function expression
let fnContainer = function fn(){
    console.log("function expression");
}
fnContainer()

// Anonymous function: function which have no name in it.
let fnCont = function (){
    console.log("Anonymous function");
}
fnCont()





