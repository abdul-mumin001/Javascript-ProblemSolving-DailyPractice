// Q.There is a book, each page of the book contains `n` words. 
// The books contains a total of `m` words. Return how many pages are there in the book


function countpage(n, m){
  let no_Of_Page=m/n;
  return no_Of_Page;
}
console.log(countpage(2,8))
exports.countpage = countpage



// Q.You're given a number, 
// calculate the sum of `1 + 2 + 3 + ... + n` and return the sum.



function numberSum(num){
  let sum=num*(num+1)/2;
  return sum;
}
console.log(numberSum(2))
exports.numberSum = numberSum



// Q.Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.

function anagram(str1, str2){
  
  let a = str1.split('').sort().join('');
  let b= str2.split('').sort().join('');
  if(a === b){
     return true;
  } else { 
     return false;
  }
 
} 
console.log(anagram('elbow', 'below'))
exports.anagram = anagram 



// Q.You're given a 5 digit number, return the sum of second and last digit of the number.

function secondLast(num){
  let lastDigit=num%10;
  let SecondLastDigit=Math.floor((num/1000)%10);
  return (lastDigit+SecondLastDigit);
}
console.log(secondLast(12345))
exports.secondLast = secondLast



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