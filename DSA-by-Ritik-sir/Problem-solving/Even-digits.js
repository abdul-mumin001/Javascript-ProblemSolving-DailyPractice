// Q Take a number and return all the even digits of the number.
// Constraints:
// 0 <= number <= 10000
// Input:
// A single integer is provided as input.
// Output:
// Return a list of even digits of the number if multiple digits are combine it in string.Return -1 in case there
// are no even digits

// all ans should be in string

// Example:
// Input:
// 12034
// Output:
// 204

function evenDigits(n) {
  if (n == 0) {
    return "0";
  } else {
    let str = "";
    let digit;
    while (n != 0) {
      digit = n % 10;
      n = Math.floor(n / 10);
      if (digit % 2 == 0) {
        str = digit + str;
      }
    }
    return str == "" ? "-1" : str;
  }
}
console.log(evenDigits(12034));
console.log(evenDigits(12345));
