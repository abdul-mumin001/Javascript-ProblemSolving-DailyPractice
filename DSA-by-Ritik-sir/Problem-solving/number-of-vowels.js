// Q. Given a string, count the number of vowels present in the string and return it.

function vowels(string) {
  const countOfVowels = string.match(/[aeiou]/gi).length;
  return countOfVowels;
}
console.log(vowels("aircampus"));
console.log(vowels("javascript"));
