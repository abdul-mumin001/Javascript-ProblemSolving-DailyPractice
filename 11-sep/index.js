//second and lastdigit
// let num=1255;
// let a=num%10;

// let b=Math.floor(num/100)

// let c=b%10;

// let ans=c+''+a
// console.log(ans)




let num = 1234 , str = '';

while(num != 0){  // true 
  let digit = num %10; // digit = 1%10 = 1
  num = Math.floor(num/10); // num = 1/10 = 0
  console.log(digit); // 4 , 3 , 2 , 1
  str += digit; //4321 
}
console.log(str);