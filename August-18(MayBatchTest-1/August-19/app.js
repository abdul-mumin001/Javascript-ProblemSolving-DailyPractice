// toString()=>changing the given value into string. eg- var a=true;a=a.toString();

// toFixed()=>return a string, with the number written with a specified number of decimals.

console.log(9.789.toFixed(2))
//9.79


// toPrecision=>it basically returns the exact number of digits that you want.

console.log(9.7898.toPrecision(1))




//Prakash sir function class


console.log("hello console")
// console.log("hello")

// function

// Robot

// function
// Go to market(200 line)
// Get vegetables(200 lines)
// Get cash from Atomics(200 lines)

// function goToMarket(){
//     console.log("Go to Market")
// }
// function buyVegetables(a,b){
//     console.log(a,b);
//     console.log("Buy vegetables")
// }
// function withdrawCash(){
//     console.log("Withdraw Cash from Atm")
// }
// goToMarket();
// buyVegetables();
// withdrawCash();

// What is variable- store data that can change the value . 

// let veg1="Carrot";
// let veg2="Brinjal";

// console.log("Monday")
// buyVegetables(veg1,veg2)
// let veg1="tomato"
// let veg2="coliflower"

// console.log("TUESDAY")
// buyVegetables(veg1,veg2)



// count personal savings of everyone then add then together

// let prakash, mumin,joyin,totalsavings;

// function savings(mutualFund,stock,cashInBank, pfFund,bond,crypto){//it will calculate the total savings of a person

//     let total=mutualFund+stock+cashInBank+pfFund+bond+crypto;
//     return total;

// }
// prakash=savings(1000,2000,50000,60000,7000,3000);
// mumin=savings(12000,13000,2000,4000,5000,23000);
// joyin=savings(2100,2000,1000,300,4000,500000);

// console.log(prakash)
// totalsavings= prakash+mumin+joyin;
// console.log(totalsavings,"totalsavings") 






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
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);


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



/
/ 5.Calculate the sum of numbers received in a comma delimited string
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
