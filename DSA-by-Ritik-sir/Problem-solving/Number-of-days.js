// Q Number of Days
// Given years,months and days as input, return the number of days as output.

// Eg 1:
// Years = 0 , Months = 1, Days = 5
// output:
// 35

// Eg 2:
// Years = 1 , Months = 3 , Days = 12
// output :
// 467

function days(years, months, days) {
  let NoOfDays = years * 365 + months * 30 + days;
  return NoOfDays;
}
console.log(days(1, 3, 12));
console.log(days(0, 1, 5));
