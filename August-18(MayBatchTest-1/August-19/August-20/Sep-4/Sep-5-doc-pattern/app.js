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
