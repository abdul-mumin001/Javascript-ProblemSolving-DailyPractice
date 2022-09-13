// 1.Q 
// *****
// *****
// *****
// *****
// *****


for(let i=1;i<=5;i++){
    let stars='';
    for(let j=1;j<=5;j++){
      stars=stars+'*'
    }
    console.log(stars)
  }



// 2.Q 
// *
// **
// ***
// ****
// ***** 


for(let i=1;i<=5;i++){
    stars='';
    for(let j=1;j<=i;j++){
      stars+='*'
    }
    console.log(stars)
  }


// 3.Q 
// 1
// 12
// 123
// 1234
// 12345


for(let i=1;i<=5;i++){
  str='';
  for(j=1;j<=i;j++){
    str+=j
  }
  console.log(str)
}



// 4.Q 
// 1
// 22
// 333
// 4444
// 55555


for(let i=1;i<=5;i++){
  str='';
  for(let j=1;j<=i;j++){
    str+=i;
  }
  console.log(str)
}




// 5.Q 
// *****
// ****
// ***
// **
// *



for(let i=1;i<=5;i++){
  str='';
  for(let j=i;j<=5;j++){
    str+="*"
  }
  console.log(str)
}


// 6.Q 
// 12345
// 1234
// 123
// 12
// 1


for(let i=5;i>=1;i--){
  str='';
  for(let j=1;j<=i;j++){
    str+=j
  }
  console.log(str)
}


// 7.Q 
//     *
//    ***
//   *****
//  *******
// *********



for(let i=1;i<=5;i++){
  str='';
  for(let j=1;j<=5-i;j++){
    str+=' '
  }
  for(let k=1;k<=i;k++){
    str+='*'
  }
  for(let l=2;l<=i;l++){
    str+= '*'
  }
  console.log(str);
}



// 8.Q 
// *********
//  *******
//   *****
//    ***
//     *

for(let i=1;i<=5;i++){
  str='';
  for(let j=1;j<=i;j++){
    str+=' '
  }
  for(let k=1;k<=6-i;k++){
    str+='*'
  }
  for(let l=2;l<=6-i;l++){
    str+= '*'
  }
  console.log(str);
}



// 9.Q 
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *


for(let i=1;i<=5;i++){
  str='';
  for(let j=1;j<=5-i;j++){
    str+=' '
  }
  for(let k=1;k<=i;k++){
    str+='*'
  }
  for(let l=2;l<=i;l++){
    str+= '*'
  }
  console.log(str);
}
for(let i=1;i<=5;i++){
  str='';
  for(let j=1;j<=i;j++){
    str+=' '
  }
  for(let k=1;k<=6-i;k++){
    str+='*'
  }
  for(let l=2;l<=6-i;l++){
    str+= '*'
  }
  console.log(str);
}


// 10.Q 

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *


let n=5;
for(let i=1;i<=n;i++){
  let str="";
  for(let j=1;j<=i;j++){
    str+="*";
  } 
  console.log(str);
}
for(let i=1;i<=n;i++){
  let str="";
  for(let j=1;j<=n-i;j++){
    str+="*";
  } 
  console.log(str);
}



// 11. Q 

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


var i;
var j;
var str= "";
for(i = 0; i <=4; i++){
  for(j = 0; j <= i; j++){
    if(j == 0 && i == 1 || i == 2 && j == 1 || j == 0 && i == 3 ||
    i == 3 && j == 2 || i == 4 && j == 1 || j == 3 && i == 4){
      str += 0+" ";
    } else {
      str += 1+" ";
    }
  }
  str += "\n";
}
console.log(str)


// 12.Q 
// 1      1 
// 12    21
// 123  321
// 12344321



  for(i=1;i<=4;i++){
    let str="";
    for(j=1;j<=i;j++){
      str+=j;
    }
      for(let j=1;j<=2*(4-i);j++){
      str+=" ";    
    }
      for(let j=1;j<=i;j++){
      str+=i-j+1;
  }
    console.log(str);   
  }



  // 13.Q 
  // 1
  // 2 3
  // 4 5 6
  // 7 8 9 10
  // 11 12 13 14 15


  let count=1;
 str="";
for(let i=0;i<=4;i++){
  for(let j=0;j<=4;j++){
    if(i==0 && j==0 || i==1 && j==0 ||i==1 && j==1 ||i==2 && j==0 || i==2 && j==1 || i==2 && j==2 || i==3 && j==0 || i==3 && j==1 || i==3 && j==2 ||i==3 && j==3 ||i==4 && j==0 || i==4 && j==1 || i==4 && j==2 ||i==4 && j==3|| i==4 && j==4){   
  str+= count + " ";
  count++;
    }
    else{
      str+="";
    }
  }
  str+="\n"
}
console.log(str);


// 14.Q 
//A
//AB
//ABC
//ABCD
//ABCDE


for(let i=1;i<=5;i++){
  let str="";
  for(let j=0;j<i;j++){
    str+=String.fromCharCode(j+65);
  }  console.log(str);
}


// 15.Q 
//ABCDE
//ABCD
//ABC
//AB
//A


for(let i=1;i<=5;i++){
  let str="";
  for(let j=i;j<=5;j++){
    str+=String.fromCharCode((i-1)+65);
  }  console.log(str);
}

// 16.Q
// A
// BB
// CCC
// DDDD
// EEEEE

let output="";
for(let i=0;i<=4;i++){
  for(let j=0;j<=4;j++){
    if(i==0 && j==0 || i==1 && j==0 ||i==1 && j==1 ||i==2 && j==0 || i==2 && j==1 || i==2 && j==2 || i==3 && j==0 || i==3 && j==1 || i==3 && j==2 ||i==3 && j==3 ||i==4 && j==0 || i==4 && j==1 || i==4 && j==2 ||i==4 && j==3|| i==4 && j==4){   
  output+= String.fromCharCode(i+65);
    }
    else{
      output+="";
    }
  }  
  output+="\n"
}
console.log(output);



// 17.Q 
     // A
    // ABA 
    //ABCBA
   //ABCDCBA



for(let i=0;i<=4;i++){
  let str="";
  for(let j=5;j>i;j--){
    str+=" ";
  }
  for(let k=0;k<=i;k++){
    str+=String.fromCharCode(k+65)
  }
  for(let j=i-1;j>=0;j--){
    str+=String.fromCharCode(j+65)
  }
  console.log(str);
}






// 18.Q 
//E
//D E
//C D E
//B C D E
//A B C D E


n = 5;
for(let i=n-1;i>=0;i--){
  let str ="";
  for(let j=i; j<n; j++){
    str +=String.fromCharCode(j+65)+" ";    
  }
  console.log(str);
}

// 19.Q 
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********


 n=5;
for (let i=1; i<=n; i++){
  let str=""
for (let j =i;j<=n; j++){
  str+="*";
  }
  for (let k=1;k<=i*2-2;k++){
  str+=" ";
  }
  for (let l=i;l<=n;l++)
      {
    str+="*";
    }
    console.log(str);
        }
        
  for (let i=1;i<=n;i++){
  let string="";
  for (let j=1;j<=i;j++){
        string+="*";
      }
  for (let k=i*2-2;k<n*2-2;k++){
    string+=" ";
    }
  for (let l=1;l<=i;l++)
    {
    string+="*";
  }console.log(string);
  }




  // 20.Q 

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

   n=5;
for(let i=1;i<=n;i++){
  let str="";
  for(let j=1;j<=i;j++){
    str+="*";
  } 
  for (let k=i*2;k<=n*2-1;k++){
    str+=" ";
  }
    for (let l=1;l<=i;l++){
    str+="*";
  }
console.log(str);
  }
for(let i=1;i<=n-1;i++){
  let string=""
  for (let j=n-1;j>=i;j--){
  string+="*";
  }
  for (let k=1;k<=i*2;k++){
  string+=" ";
    }
  for (let l=n-1;l>= i;l--){
    string+="*";
    }
    console.log(string)
}



// 21.Q
// *****
// *   *
// *   *
// *   *
// *****


 n=5;
for(let i=0;i<n;i++){
  let string="";
  for(j=0;j<n;j++){
    if(i === 0 || i === n-1 ) {
      string += "*";
    }
    else {
      if(j === 0 || j === n-1 ) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }console.log(string)
}



// 22.Q 
// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4


 n = 7
let start = 1;
let end = Math.floor(n/2) + 1;
for(let i = 1; i <= 7; i++){
  let str = ""
  for(let j =1; j <= 7 ;j++){
    if(i == start + 0 || i == n - 0  || j==start + 0 || j == n - 0 ){
      str+=" "+ (end - 0);
    }else if(i == start + 1 || i == n-1 || j == start+1 || j == n -1){
      str += " "+(end-1)
    } else if(i == start + 2 || i == n-2 || j == start + 2 || j == n - 2){
      str += " "+(end -2)
    } else if( i== start + 3 || i == n-3 || j == start +3 || j == n-3 ){
      str += " " + (end-3)
    }
  }
  console.log(str)
 }



//  23.Q 
// *   *****
// *   *
// *   *
// *********
//     *   *
//     *   *
// *****   *

 str= "";
for(i = 1; i <= 7; i++){
  for(j = 1; j <= 9; j++){
    if(j == 5 && i >= 1 || i == 4 && j >= 1 || j == 1 && i <= 3 ||
    i == 1 && j >= 6 || i == 7 && j <= 4 || j == 9 && i >= 5){
      str += "*";
    } else {
      str += " ";
    }
  }
  str += "\n";
}
console.log(str)

