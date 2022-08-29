// Q.Take an integer and print 'aircampus' if the input integer is an Aircampus number, otherwise print 'no'.

// Hint:

// A number is called Aircampus number if the sum of its own digits each raised to the power of the number of digits is equal to the original number itself.

// Example:

// 123 => 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36

// 1234 => 1^4 + 2^4 + 3^4 + 4^4 = 1 + 16 + 81 + 256 = 354




// function aircampus(n){
//     let actualnumber=n;
//     let digit;
//     let count=0;
//     let sum=0;
//     while(n!=0){
//       digit=n%10;
//       n=Math.floor(n/10);
//       count++
//     }
//     // console.log(count)
//     n=actualnumber;
//     while(n>0){
//       digit=n%10;
//       let SqrDigit=digit**count;
//       sum+=SqrDigit
//       n=Math.floor(n/10);
//     }
//     // console.log(sum)
    
//     if(actualnumber===sum){
//       return "aircampus";
//     }else{
//       return "no";
//     }
//   }
//   console.log(aircampus(123))




// Q.Prakash Dey is the teacher of a higher secondary school. He was assigned a task to record the number of students in each class.
//  The 1st class has ‘A ’ students and 2nd class has ‘B’ students. He completed noting down all the classes but till he reached
//   class xth the school was over. When he was going through the list he noticed that the next class had students equal to the 
//   sum of its last two classes. Can you help him to find out the number of students present in xth class using the above details.

// constraint: 

// 1<=A,B<=100



// function students(num1,num2){
//     let num3=num1+num2;
//     let num4=num3+num2;
//     let num5=num4+num3;
//     let num6=num5+num4;
//     let num7=num6+num5;
//     let num8=num7+num6;
//     let num9=num8+num7;
//     let num10=num9+num8;
//     return num10
//   }
  
//   console.log(students(a = 20,
//   b = 30 ))



// Q.# Even Cube
// You are given a number from 1 to N .  Sum all the cubes of even numbers and return the sum.


// function evenCube(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){
//       if(i%2==0){
//         sum+=i**3;
//       }
//     }
//     return sum;
//   }
//   console.log(evenCube(10))



// Q.# Reverse
// You are given a number, return the reverse of the number



// function reverse(num){
//     let rev=0;
//   while(num!=0){
//     let LastDigit=num%10;
//     rev=rev*10+LastDigit;
//     num=Math.floor(num/10)
//   }  
//     return rev
//   }
//   console.log(reverse(12345))
//   console.log(reverse(121))


// pattern
// 1
// 12
// 123
// 1234
// 12345



function pattern(){
 
  
    for(let i=1;i<=5;i++){
      let str='';
      for(let j=1;j<=i;j++){
        str+=j;
        
      }
      console.log(str)
    }
    
  }
  pattern()
