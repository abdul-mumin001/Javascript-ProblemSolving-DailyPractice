// Q Display this following sum pattern:

// no test cases are provided
//   1
//   3 6
//   10 15 21
//   28 36 45 55
//   66 78 91 105 120

function sum(n) {
  let count = 0,
    sum = 0;
  for (i = 1; i <= n; i++) {
    digit = "";
    for (j = 1; j <= i; j++) {
      count++;
      sum = sum + count;
      digit += `${sum} `;
    }
    console.log(digit);
  }
}
sum(5);
// sum(6)
