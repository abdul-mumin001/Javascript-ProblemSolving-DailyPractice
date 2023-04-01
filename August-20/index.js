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
 


// Kishore Cherukuru	
// "1. Write a JavaScript program to check whether the last digit of the three given positive integers is the same.
// Ex1- Input: 28, 38, 408 Output: true Ex2- Input: 20, 32, 403 Output: false 
// 2. Get a Random Integer value between 1 and 10
// 3. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
// Ex1: Input: 8, 8, 8 Output: 30 Ex2- Input: 8, 8, 18 Output: 40 Ex3- Input: 8, 7, 18 Output: 20
// 4. Check from two given integers whether one of them is 8 or their sum or difference is 8.
// Ex1- Input: 24 ,32 Output: true Ex2- Input:18, 19 Output: false
// 5. Write a JavaScript Program to Check Leap Year.
// Output: 2004 is a leap year"
	
// KUMAR VISHAL 	
// 1:-Write a JavaScript program to get the current date.Expected Output :mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// 	"2:-Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38"
// 	3:-Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  
// 	4:-Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  
// 	"5:-Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C"
	
// Tanya Sinha	
// Write a javascript program to accept a week day number display corresponding week day name.
// 	Write a javascript program to accept a number check it prime or not prime number.
// 	"write a program to print    1
//                                          1  2
//                                          1  2   3
//                                          1  2   3   4
//                                          1  2   3   4   5"
// 	Write a program to display table of 5.
	
	
// RAJESH KUSHWAHA	
// 1:-Write a program reads String and display words by words.
// 	2:- Display string into Character by character
// 	3:- Find Buzz number or not ?
// 	4:-Swapping program in two variable . Exp-a=7,b=8;
// 	5:- Print 0 3 8 15 24 ;
	
// PRIYA SINGH	
// 1:> take two number a,b and only print the decimal part of the result a/b
// 	2:>take two number and print the reverse of that number
// 	3:>take three digit number and return the first and last
// 	4:>take four digit a,b,c,d and return second smallest  use if else 
// 	5:>take two number a,b return the biggest number 
	
// SHUVANKAR SAHA	
// 1. Find square root of a number.
// 	2. Check & print the largest digit in a three digit number.
// 	3. Calculate 13 percent of  number and multiply it by 13.
// 	"4.Check if a number is even or odd and print it out. Use switch case to solve the problem. Constraints:
// 0 <= input <= 1000"
// 	5. Take a string from the input and print it in reverse
   

// ANANTA KUMAR BORAH
// 	1.   Return the percentage of  five subject marks of a student out of 100 !
// 2.   Take a number and print the square of that no !
// 	3.   Take marks of 5 students in mathametics, print the average marks of all the students !
// 	4.   Take cost price and selling price of a product, print the profit !
// 	5.   Take two numbers num1 and num2, return the remainder !

// VIKRAM SINGH SISODIA	
// 1.Print the first 100 natural numbers
// 	2.You will be given two numbers, if their sum is in 50..80 (inclusive) then return 65 otherwise return 80.
// 	3Print the sum of all even numbers from 1 to 100.
// 	4.RETURN PERCENTAGE OF 5 STUDENT WHOSE MARKS ARE GIVEN OUT OOF 100
	