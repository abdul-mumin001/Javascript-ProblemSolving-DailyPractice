// Q. You're given a number as an argument, return the sum of number+1 and number-1

// function sum(num){
//     let SumOfPrevAndNext=(num-1)+(num+1);
//     return SumOfPrevAndNext;
//   }
//   console.log(sum(5))


//   Q. You're given two number, power and the base as an argument, return the base raised to the given power

// function power(power, base){
//     let PowerCalculator=base**power;
//     return PowerCalculator;
//   }
//   console.log(power(5,5))


//   Q. You're given two number as an argument, return the remainder obtained by dividing number1 by number2

// function remainder(num1, num2){
//     let rem=num1%num2;
//     return rem;
//   }
//   console.log(remainder(3,2))


//   Q. You're given a string as an argument, add the word `aircampus` to the string variable and return it. 

// function stringAssign(str){
//     return `${str}aircampus`;
//   }
//   console.log(stringAssign('air'))


//   Q. You're given two number as an argument, divide first number from the second number and vice versa and return the sum of the results 

// function divideSum(num1, num2){
//     let x=num1/num2;
//     let y=num2/num1;
//     return (x+y);
//   }
//   console.log(divideSum(3,2))


//   Q. Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// function polygon(n){
//     let TotalSumOfInternalAngle=(n-2)*180;
//     return TotalSumOfInternalAngle;
//   }
//   console.log(polygon(3))


//   Q. Given a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// function maxEdge(side1, side2){
//     let maximumRangeOfThirdEdge=(side1+side2)-1;
//     return maximumRangeOfThirdEdge;
//   }
//   console.log(maxEdge(8,10))


//   Q. Given a function with seconds as its parameter. Converts seconds to hours and return it.


// function toHours(sec){
//     let ConSecToHours=sec/(60*60);
//     return ConSecToHours;
//   }
//   console.log(toHours(3600))


//   Q. You're given a number as function argument. Add 8 to the number and then divide it by 3. Now, the modulus of that number is taken with 5 and then multiply the resultant value by 5. Display the final result.

// function maths(num){
//     let Maths=(num+8)/3;
//     let Result=(Maths%5)*5;
//     return Result;
//   }
//   console.log(maths(5))


//   Q. You're given two numbers, swap the numbers and return the other number.

function swap(a, b){
    a=a+b;
    b=a-b;
    a=a-b;
    return b;
  }
  console.log(swap(2,3))


