// Q Average Salary
// Write a JavaScript code to check if the average salary of 5 employees is greater than 50000.

// Eg 1: 
// sal1 = 100000, sal2 = 120000, sal3 = 30000, sal4 = 500000, sal5 = 40000
// output: 
// yes

// Eg 2:
// sal1 = 10000, sal2 = 20000, sal3 = 30000, sal4 = 50000, sal5 = 40000
// output :
// no
 

function average_salary(sal1,sal2,sal3,sal4,sal5){
  
    if(((sal1+sal2+sal3+sal4+sal5)/5)>50000){
      return "yes"
    }else{
      return "no"
    }
   
  }
  console.log(average_salary(10000,20000,30000,50000,40000))