// Q. Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".



var backspaceCompare = function(s, t) {
    let sArr = [];
  let tArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sArr.pop();
    } else {
      sArr.push(s[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      tArr.pop();
    } else {
      tArr.push(t[i]);
    }
  }
  sArr = sArr.join("");
  tArr = tArr.join("");
  return sArr === tArr;
};


console.log(backspaceCompare("ab#c","ad#c"))