// Q Given a string, if it is a palindrome return true else return false.

// Input:
// ```
// arora
// ```
// Output:
// ```
// true
// ```
// Input:
// ```
// campus
// ```
// Output:
// ```
// false
// ```

function palindrome(str) {
  if (str == str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("arora"));
console.log(palindrome("campus"));
