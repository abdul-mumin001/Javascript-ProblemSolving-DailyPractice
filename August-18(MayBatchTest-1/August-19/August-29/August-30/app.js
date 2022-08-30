// let count = 0;
// for( let num = 987654; num > 0; num = Math.floor(num/10)){
//   // console.log()
//   count++;
// }
// Top-bottom --> left to right

// let i = 0;
// while(i<=10){
//   console.log("");
//   i++;
// }

// let count = 0;
// let num = 987654;
// while(num > 0){ 
//   let rem = num % 10; // rem =  987654 / 10 => 4 remender
//   num = Math.floor(num/10);// 987654/10 = num =  98765
//   count = count + 1;
// }
// console.log(count);

// while loop and for loop are entry control loop :- Entry ke time par condition check karna
// do while loop:- exit control loop :- Exit ke time par condition check karna


//  num = 987 -> 98 -> 9 -> 0
//  rev = 7 -> 78 -> 789

// Find the reverse of the num.

// let num = 987
// let rev = 0;

// do{
//   let rem = num % 10;  // 9 % 10 -> 9
//   rev = rev * 10 + rem; // 78 * 10 + 9 -> 789
//   num = Math.floor(num/10) // 0
// }while(num > 0)

// console.log(num)
// console.log(rev)
// console.log(rem) 


// *        *
// **      **
// ***    ***
// ****  ****
// **********
// n  = 3
// space = 4 -> 2 -> 0 -> -2
// i = 1 -> 2 -> 3 -> 4
// 
// 




// let n = 4
// // let space = 2*n - 2 ; // 2*3 - 2 = 4 

// for(let i = 1;i<=n;i++){
//   let str = ""
//   for(let j = 1;j<=i;j++){
//     str += j // str = "1" + 2 => "12"
//   }
//   for(let j = 1;j<=2*(n-i);j++){
//     str += " " // str = "12    "
//   }
//   for(let j = 1;j<=i;j++){
//     str += i-j+1 // str "12   21"
//   }
//   console.log(str);
// }

// 1      1
// 12    21
// 123  321
// 12344321
// 1      1
// 12    21
// 123  321
// 12344321
// *    *
// **  **
// ******




// let n = 4;
// for(let i = 1;i<=n;i++){
//   var str = ""
//   for(let j = 1; j <= i ; j++){
//     // console.log("*")
//     str = str + "*" // "**" + "*" = "***"
//   }
//   console.log(str);
// }

// // *
// // **
// // ***
// // ****






//    *
//   ***
//  *****
// *******

// let n = 4
// let space = n - 1 
// let star = 1;
// let str = ""
// for(let i = 1;i <= n; i++){
//   for(let j = 1;j <= space; j++){
//     str = str + " ";
//   }
//   for(let j = 1;j <= star; j++){
//     str = str + "*";
//   }
//   space = space - 1;
//   star = star + 2;
//   str = str + "\n";
// }
// console.log(str);



//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *




let n = 7
let space = (n-1)/2 
let star = 1;
for(let i = 1;i <= n; i++){
  let str = ""
  for(let j = 1;j <= space; j++){
    str = str + " ";
  }
  for(let j = 1;j <= star; j++){
    str = str + "*";
  }
  space = i<= n/2 ? space -1 : space+1;
  star = i<= n/2 ? star +2 : star-2;
  // if(i <= n/2){
  //   space = space - 1;
  //   star = star + 2;
  // }else{
  //   space = space + 1;
  //   star = star - 2;
  // }
  // str = str + "\n";
  console.log(str);
} 
// n(space*star) 
// n/2(space*star)+n/2(space*star) => n(space*star) 
// "   *\n  ***\n *****\n*******\n *****\n  ***\n   *"
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *