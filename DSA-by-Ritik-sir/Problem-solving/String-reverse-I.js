// Q Given a string sentence, reverse the string word by word

// Input:
// ```
// the sky is blue
// ```
// Output:
// ```
// blue is sky the
// ```
// Input:
// ```
// hello   world!
// ```
// Output:
// ```
// world! hello
// ```

function reverse(str) {
  let x = str.split(" ").reverse().join(" ");
  return x;
}
console.log(reverse("the sky is blue"));
console.log(reverse("hello   world!"));
