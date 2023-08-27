// Q. Unlce Ben decides to give chocolates to kids in his neighbourhood. He predecides the number of chocolates he
//  wants to give each kid and arranges them in a bag. Now he wants to give 2 more chocolates to kids who less 
//  than 5 and reduce 1 chocolate who got more than 10. 

// Input:
// [1, 6, 7, 11]
// Output:
// [3,6,7,10]

function more_choclates(arr){
    let x=[];
     for(let i of arr){
       if(i<5){
         x.push(i+2)
       }else if(i>10){
         x.push(i-1)
       }else{
         x.push(i)
       }
     }
     return x;
   }
   console.log(more_choclates([1, 6, 7, 11])) 