// find the squareroot of number 

function squareroot(number) {
    for (var i = number; i >= 1; i--) {
        if (i * i === number) {
            number = i;
            break;
       }
   }
   return number;
}

console.log(squareroot(81))





// Q. Try to implement Math.pow(a,b) 



function pow (a,b){
    if(a > 0 && b === 0){
        return 1;
    }
    c = a;
    while(b > 1){
        c = a*c;
        b--;
    }
    return c;
}


console.log(pow(0,0)+'\n'); 
console.log(pow(2,6)+'\n'); 


function power(a,b){
  let pow=a**b;
  return pow;
}
console.log(power(2,6))
console.log(power(1,0))