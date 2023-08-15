// Q. Given a string and two index values, return the string from the start index to end index.
// Input:
// javascript 4 10
// output:
// script

function substring(str, a, b) {
  return str.substring(a, b);
}
console.log(substring("javascript", 4, 10));
console.log(substring("frontenddeveloper",8,17));
