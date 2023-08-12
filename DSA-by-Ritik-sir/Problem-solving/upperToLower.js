// Q. Given a string, return the string after changing the uppercase characters to lowercase and lowercase
// characters to uppercase.

// Input:
// AirCampus
// Output:
// aIRcAMPUS

function upperLower(strings) {
  let upperToLower = [];
  let upperCase = strings.toUpperCase();
  let a = upperCase.split("");

  let arr = strings.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a[i]) {
      upperToLower.push(arr[i].toLowerCase());
    } else {
      upperToLower.push(arr[i].toUpperCase());
    }
  }
  return upperToLower.join("");
}
console.log(upperLower("AirCampus"));
console.log(upperLower("JavaScript"));
