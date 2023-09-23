// Q. Swap two numbers using a 3rd variable
// Take two numbers and swap them.

// Eg 1: 
// 10 <br>
// 2
// output: 
// 2,10

// Eg 2:
// -10 <br>
// 2
// output :
// 2,-10


function swap(a,b){

  a=a+b;
    b=a-b;
    a=a-b;
    return(a+","+b);

  } 
  console.log(swap(-10,2))