// Q. Given a string, return the last 4 characters of the given string.
// Input:
// Javascript
// Output:
// ript

function lastFour(string) {
  let lastFourDigits = "";
  if (string.length > 4) {
    lastFourDigits = string.substring(string.length - 4);
  } else {
    lastFourDigits = string;
  }
  return lastFourDigits;
}
console.log(lastFour("Javascript"));
