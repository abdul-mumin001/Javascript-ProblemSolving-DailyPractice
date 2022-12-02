 // Call By Reference
 
// function fun(ob, a) {
//     ob.a = 100;
//     a[0] = 10;
//     console.log(ob, a);
// }
 
// let obj = {
//     a: 1
// }

// let arr = [1, 2];
 
// console.log("Before Call", obj, arr);
 
// fun(obj, arr);
 
// console.log("After call", obj, arr);





function callByReference(varObj) {

    console.log("Inside Call by Reference Method");

    varObj.a = 100;
    console.log(varObj);

}

let varObj = {
    a: 1
};

console.log("Before Call by Reference Method");

console.log(varObj);

callByReference(varObj)

console.log("After Call by Reference Method");

console.log(varObj);



