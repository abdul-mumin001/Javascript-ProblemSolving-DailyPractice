// Q. Average Salary
// Take salary of five employees and print the average salary of all the employees.

// Eg 1: 
// 10 20 30 40 50 <br>
// output: 
// 30

// Eg 2:
// 10 22 31 40 50 <br>
// output :
// 30.6

function average_salary(a,b,c,d,e){
    
    let avgSal=(a+b+c+d+e)/5;
    return avgSal;
   
  }
  console.log(average_salary(10,20,30,40,50))
  console.log(average_salary(10,22,31,40,50));