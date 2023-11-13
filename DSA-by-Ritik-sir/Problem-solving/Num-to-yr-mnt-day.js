// Q Take a number and convert it to year, months and days. Result: sum of Years months + remaining Days
// ### Input Format
// A positive integer ```num``` is given as a function parameters.
// ### Output Format
// Sum of YY, MM and DD

// Here YY = Years,
//      MM = Months and
//      DD = Days

// ### Sample Input 1
// ```
// 2000
// ```

// ### Sample Output 1:
// ```
// 33
// ```

// ### Explanation 1: 

// ```
// 2000 Days = 5 Years 5 Months and 23 days.
// Therefore, result = 5 + 5 + 23 = 33
// ```

function yearMonthDaysSum(num){

    let sum=0;
    let year=Math.floor(num/365);
    console.log(year);

    let month=Math.floor(num%365/31);
    console.log(month);

    let days=Math.floor((num%365)%30)
    console.log(days);
    sum=year+month+days;
    return sum;

  }
  console.log(yearMonthDaysSum(2000))
  console.log(yearMonthDaysSum(3000))