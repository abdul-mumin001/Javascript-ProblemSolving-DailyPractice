// Q Multiple of 3 and 5
// Write a JavaScript program to check whether a given positive number is a multiple of 3 and 5.

// Eg 1: 
// 10 <br>
// Output: 
// no

// Eg 2:
// 15 <br>
// Output :
// yes

function is_multiple(num){
    
  if(num%3==0 && num%5==0){
    return "yes"
  }else{
    return "no"
  }
    
  }
  console.log(is_multiple(15))