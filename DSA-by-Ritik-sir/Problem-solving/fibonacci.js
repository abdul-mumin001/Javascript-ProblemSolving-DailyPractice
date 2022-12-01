// Fibonacci
 
function fib(n) {
    if(n == 1)
        return 0;
    if(n == 2)
        return 1;
   
    let f = fib(n-1) + fib(n-2);
    return f;
}
 
console.log(fib(5));
