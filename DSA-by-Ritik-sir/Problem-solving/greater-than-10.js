// Q. Given an string, return “YES”, if the string length is greater than 10 else return “NO”

function greater(string) {
  if (string.length >= 10) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(greater("aircampus"));
console.log(greater("javascript"));
