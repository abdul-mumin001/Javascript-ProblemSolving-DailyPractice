// Q Number of Seconds
// Given the number of hours,minutes and seconds, return the number of seconds.

// Eg 1: 
// Hours = 1, Minutes = 2 , Seconds = 32
// output: 
// 3752

// Eg 2:
// Hours = 0, Minutes = 5, Seconds = 59
// output :
// 359


function seconds(hours,minutes,seconds){
    
  let ns=(hours*60*60)+(minutes*60)+seconds;
    return ns;
   
  }
  console.log(seconds(1,2,32))
  console.log(seconds(0,5,59));