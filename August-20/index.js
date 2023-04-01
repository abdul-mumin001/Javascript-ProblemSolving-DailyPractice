// Q1. Take a 3 digit number and print the reverse of that number.
//  i/p=123;  o/p=3,2,1

// Q2. write a javascript program to check pass or fail
// Q3. check the age to determine the eligibility to vote
// Q4.Create a function to calculate the distance between two points defined by their x, y coordinates
// Q5.Calculate the sum of numbers received in a comma delimited string
// Q6.Write a function that takes an integer minutes and converts it to seconds.
// Q7.Create a function that takes the age in years and returns the age in days.
// Q8.Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.  Go to the editor
//  Q9.Print all even numbers from 0 – 10
// Q10.Calculate the sum of numbers from 1 to 10

// 1. Take a 3 digit number and print the reverse of that number.
//  i/p=123;  o/p=3,2,1

function reverse(a){
    
    let x=a%10;
    let b=Math.floor(a/10)
    let y=b%10;
    let z=Math.floor(b/10)
    return (x+","+y+","+z)
    
   
  }
  console.log(reverse(123))


//  2. write a javascript program to check pass or fail

let marks = prompt('Enter your marks :');

// check the condition
let results = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${results} the exam.`);


// 3. check the age to determine the eligibility to vote

let age = 15;
let result =(age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);

// 4.Create a function to calculate the distance between two points defined by their x, y coordinates

console.log(getDistance(100, 100, 400, 300));

function getDistance(x1, y1, x2, y2)
{
    var l1 = x2 - x1;
    var l2 = y2 - y1;
    
    return Math.sqrt(l1 * l1 + l2 * l2);
}




//  5.Calculate the sum of numbers received in a comma delimited string

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(s)
{
    var ar = s.split(",");
    
    var sum = 0;
    
    for(var n of ar)
    {
        sum += parseFloat(n);
    }
    
    return sum;
}



// Q6.Write a function that takes an integer minutes and converts it to seconds.

function convertMS(minutes){
    let sec=(minutes*minutes);
    return sec
    }
    console.log(convertMS(100))
    

// Q7.Create a function that takes the age in years and returns the age in days.

function convertAgeInYrToDays(ageInYears){
    let ageInDays=(ageInYears*365);
    return ageInDays;
}
console.log(convertAgeInYrToDays(22))




// 8.Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.  Go to the editor

function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test37(12));

//  Q9.Print all even numbers from 0 – 10
for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(i)
    }
}


//10. Calculate the sum of numbers from 1 to 10

var sum = 0;

for(var i = 1; i <= 10; i++)
{
    sum += i;
}

console.log(sum);



// pratik parmeshwar jamadar	

// Q 1 .  Calculate the sum of prime number form 0 to 20
 //Q 2 . calculate the sum of odd position's number:  input 5879856
// 	Q 3 : If number is a prime number the print "is a prime number" otherwise " is a not prime number"
// 	Q 4 : find the difference between even number and odd number and then add the prime number.
// 	Q 5 : if number is divisiable by 3 then write" yes " if else " No" 
// 	Q6 : create the 5's table
// 	Q 7 : find cube root of 4913
// 	Q8 : find prime number between 1 to 100
// 	Q 9 : print last digit of number input "abcd"
// 	Q 10 : find square root of 4225
	
// Q 1 .  Calculate the sum of prime number form 0 to 20



 //Q 2 . calculate the sum of odd position's number:  input 5879856

 let sum=0;

 function sumOfOdd(num){
 let oddsum=0;
 while(num!=0){
  let digit=num%10;
  num=Math.floor(num/10);
  if(digit%2!=0){
    oddsum+=digit;
  }
 }
 
    return oddsum;
 }
 console.log(sumOfOdd(5879856))


 // Q 3 : If number is a prime number the print "is a prime number" otherwise " is a not prime number"

 const number = parseInt(process.argv[2]);
 let isPrime = true;
 
 // check if number is equal to 1
 if (number === 1) {
     console.log("1 is neither prime nor composite number.");
 }
 
 // check if number is greater than 1
 else if (number > 1) {
 
     // looping through 2 to number-1
     for (let i = 2; i < number; i++) {
         if (number % i == 0) {
             isPrime = false;
             break;
         }
     }
 
     if (isPrime) {
         console.log(`${number} is a prime number`);
     } else {
         console.log(`${number} is a not prime number`);
     }
 }
 
 // check if number is less than 1
 else {
     console.log("The number is not a prime number.");
 }	