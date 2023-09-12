// Q. Accept the number of days from the user and calculate the charge for library according to following :
// Till five days : Rs 0/day.
// Six to ten days  : Rs 3/day.
// 11 to 15 days  : Rs 4/day
// After 15 days    : Rs 5/day

// constraints:
// 0<=day<=365

// input:
// Already given as function parameter
// Output:
// Total charge
// Eg:
// input:
// 10
// Output:
// 15

function calculateCharge(number_of_days) {
  let a = number_of_days;

  if (a > 15) {1
    return 5 * 3 + 5 * 4 + (a - 15) * 5;
  } else if (a > 10) {
    return 5 * 3 + (a - 10) * 4;
  } else if (a > 5) {
    return (a - 5) * 3;
  } else {
    return 0;
  }
}

console.log(calculateCharge(10));
