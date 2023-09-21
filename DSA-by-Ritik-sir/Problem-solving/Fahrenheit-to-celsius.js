// Q Fahrenheit to Celsius
// Take temperature as input and convert it from fahrenheit to celsius. 

// Eg 1: 
// 77 <br>
// Output: 
// 25

// Eg 2:
// 89.60 <br>
// Output :
// 32


function ftoc(a){
  
    let tem=a;
    let cel=(tem-32)*5/9;
    return cel;

  }
  console.log(ftoc(77))