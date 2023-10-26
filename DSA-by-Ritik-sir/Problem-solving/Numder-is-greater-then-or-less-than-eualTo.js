// Q number is equal to zero, less than zero, or greater than zero.
// Take one number and check whether number is equal to zero, less than zero, or greater than zero.

// Eg 1:
// 10 <br>
// output:
// 1
// Eg 2:
// -7 <br>
// output :
// -1

// Eg 3:
// 0 <br>
// output :
// 0

function checkNumber(num) {
  if (num > 1) {
    return 1;
  }
  if (num < 0) {
    return -1;
  } else {
    return 0;
  }
}
console.log(checkNumber(10));
console.log(checkNumber(-7));
