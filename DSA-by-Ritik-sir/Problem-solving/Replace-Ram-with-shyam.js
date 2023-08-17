// Q. Given a string, replace the first occurrences of Ram with Shyam.
// Input:
// Shyam likes to code. Ram is a javascript developer.
// Output:
// Shyam likes to code. Shyam is a javascript developer.

function ramShyam(str) {
  return str.replace(/Ram/i, "Shyam");
}
console.log(ramShyam("Shyam likes to code. Ram is a javascript developer"));
