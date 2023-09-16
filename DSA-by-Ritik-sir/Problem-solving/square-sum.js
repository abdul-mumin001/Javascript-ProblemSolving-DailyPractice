// Q. Take a number and find the "ans" by sum of sqaure of digits. 
// once you find this "ans" repeat the steps ( I mean find sum of square of digits of ans)
// and repeat this process until you get 1. 

// Eg: 
//  49 => 4*4 + 9*9 =>16+81 => 97 <br>
//  since 97 is not equal to 1 so we will repeat the steps <br>
//  97 => 9*9+7*7 = 81+49 = 130<br>
//  it is still not 1: so lets repeat <br>
// 130 => 1*1 + 3*3 + 0 => 10 
//  it is still not 1: so lets repeat <br>
// 10 => 1*1 +0 = 1 

// If after certain number of steps finally we get 1 than number is called "CodeSpecial"

// in case if it is not possible to get 1 after any number of steps than lets call that number
// "SomethingUnusual"


function checkNumber(n){
    let count=1;
     while(count<100 && n!=1){
       let sum=0;
     while(n!=0){
         let rem=n%10;
       sum=sum+rem**2;
       n=Math.floor(n/10)
       }
     count ++;
     n=sum;
   }
     if(n==1){
       return ("CodeSpecial")
     }else{
       return ("SomethingUnusual")
     }
   }
   console.log(checkNumber(49))
   console.log(checkNumber(10))
   console.log(checkNumber(5));