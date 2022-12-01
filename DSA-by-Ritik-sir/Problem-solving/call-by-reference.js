 // Call By Reference
 
function fun(ob, a) {
    ob.a = 100;
    a[0] = 10;
    console.log(ob, a);
}
 
let obj = {
    a: 1
}

let arr = [1, 2];
 
console.log("Before Call", obj, arr);
 
fun(obj, arr);
 
console.log("After call", obj, arr);

