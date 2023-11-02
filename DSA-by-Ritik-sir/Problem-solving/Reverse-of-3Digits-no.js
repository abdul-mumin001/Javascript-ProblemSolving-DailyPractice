// Q Reverse Of a Number
// Write a program to check if the given 3 digit number is equal to its reverse or not.

// Eg 1: 
// 101
// Output: 
// yes

// Eg 2:
// 527
// Output :
// no

function reverse(num){
  let x=num%10;
    let y=Math.floor((num/10)%10);
    let z=Math.floor(num/100);
    if(x==y==x || (x==z && y>=0)){
      return "yes"
    }else{
      return "no"
    }
    
  }
  console.log(reverse(111))
  