// Q Sum of area and perimeter of a rectangle
// Given length and breadth of a rectangle return the sum of area and perimeter of the rectangle.

// Eg 1: 
// 10 <br>
// 2
// output: 
// 44

// Eg 2:
// 7 <br>
// 3
// output :
// 41

function sum(length,breadth){
    
    let sum=0;
    let area=length*breadth;
    let perimeter=2*(length+breadth);
    sum=area+perimeter;
    return sum;
   
  }
  console.log(sum(10,2))