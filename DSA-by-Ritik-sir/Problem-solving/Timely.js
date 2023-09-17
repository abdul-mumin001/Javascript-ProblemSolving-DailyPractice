// Q. Write a code to take time in seconds and convert it into hour, mins and seonds

// Input:<br>
// already given as function parameter
// Output: <br>
// hour, mins and seconds with a
// message as in example.

// Eg: 
// input: <br>
// 5000
// Output: <br>
// In 5000 seconds 1 hours , 23 minutes and 20 seconds are possible

function time(seconds){
    let num=seconds;
      let h=Math.floor(num/(60*60));
      let m=Math.floor(num/60)-h*60;
      let s=num%60
      return (h+":"+m+":"+s);
     
    }
    console.log(time(5000))
    console.log(time(3000));