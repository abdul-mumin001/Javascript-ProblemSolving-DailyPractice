// Q. Given a string, find out how many times ‘e’ is present in the string. Return the count of ‘e.’

function counte(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "e") {
      count = count + 1;
    }
  }
  return count;
}
console.log(counte("I love india"));
console.log(counte('i love my motherland'));
