// Q First Digit
// Take a number and print out the first digit of the number.

// Eg 1:
// 123 <br>
// Output:
// 1

// Eg 2:
// -534 <br>
// Output :
// 5

function first_digit(a) {
  a=Math.abs(a);
  let firstDigit=a;
  while(firstDigit>=10){
    firstDigit=Math.floor(firstDigit/10)
  }
  return firstDigit
}
console.log(first_digit(123));
console.log(first_digit(-534));