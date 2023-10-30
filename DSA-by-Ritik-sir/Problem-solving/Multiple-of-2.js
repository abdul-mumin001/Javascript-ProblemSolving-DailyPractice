// Q Multiple of 2
// Write a JS code to check if the given number is multiple of two.

// Eg 1: 
// 10 <br>
// Output: 
// yes

// Eg 2:
// 7 <br>
// Output :
// no


function is_multiple(num){
    
  if(num%2==0){
    return "yes"
  }else{
    return "no"
  }
   
  }
  console.log(is_multiple(7))
  console.log(is_multiple(10))