// Q Positive and Negative
// Given a number determine if it positive or negative.
// Input: <br>
// Input is provided as functional parameter.
// Output: <br>
// Return the answer.

// Eg 1:
// 127
// output:
// positive

// Eg 2:
// -127
// output :
// negative

function is_positive(number) {
  if (number > 0) {
    return "positive";
  } else {
    return "negative";
  }
}
console.log(is_positive(-2));
console.log(is_positive(2));
