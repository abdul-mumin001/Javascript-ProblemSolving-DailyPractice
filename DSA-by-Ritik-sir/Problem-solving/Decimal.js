// Q Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b

// Input 1
// ```
// 3 2
// ```
// Output 1:
// ```
// 5
// ```
// Explanation 1: 
// ```
// 3 / 2 = 1.5
// The decimal part is 0.5
// ```

function decimal(num1, num2){

    let a=num1;
    let b=num2;
    c=a/b;
    d=Math.floor(a/b);
    e=c-d;
    return e;
    
  }
  console.log(decimal(3,2))
  console.log(decimal(6,4));