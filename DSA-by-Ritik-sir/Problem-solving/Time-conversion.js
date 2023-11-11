// Q Write a code to take time in seconds and convert it into hour, mins and seconds

// Input 1
// ```
// 2000
// ```
// Output 1:
// ```
// 00:33:20
// ```
// Explanation 1: 

// ```
// 2000 /(60 * 60) = 0.555
// Therefore Hour = 0

// 2000 / 60 = 33.33
// Therefore Minutes = 33

// and 2000 % 60 = 20
// Therefore seconds = 20

// So, the answer become 
// 00:30:20

// ```

function time(seconds){

    let num=seconds;
    let h=Math.floor(num/(60*60));
    let m=Math.floor(num/60)-h*60;
    let s=num%60
    return (h+":"+m+":"+s)

  }
  console.log(time(2000))
  console.log(time(1000));