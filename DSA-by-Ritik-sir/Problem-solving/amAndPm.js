// Q Take a time in 24 hour fomrat and onvert it to 12 hour format.
// Also if hour or minute is of single digit add "0" before it

// Input:
// hour and min will be provided as two different parameters in function
// output:
// time in 12 hour format with AM and PM written

// eg:
// hour = 13
// min = 56
// output:
// 1:56 PM

// eg: 2
// hour = 7
// min = 25
// output:
// 07:25 AM

function amPm(hr, min) {
  // let time=24hour;
  var s = hr >= 12 ? "PM" : "AM";
  var hr = ((hr + 11) % 12) + 1;
  return hr + ":" + min + " " + s;
}
console.log(amPm(13, 56));
console.log(amPm(7, 25));
