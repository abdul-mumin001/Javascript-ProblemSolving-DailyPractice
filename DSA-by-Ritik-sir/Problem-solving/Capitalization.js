// Q Given a string, capitalize the first letter of each word.

// Input:
// ```
// This is a title
// ```
// Output:
// ```
// This Is A Title
// ```
// Input:
// ```
// capitalize every word
// ```
// Output:
// ```
// Capitalize Every Word
// ```

function capitalization(str) {
  let x = str.split(" ");
  let capitalizeTheFirstLetter = [];
  x.forEach((letter) => {
    capitalizeTheFirstLetter.push(
      letter[0].toUpperCase() + letter.slice(1, letter.length)
    );
  });

  return capitalizeTheFirstLetter.join(" ");
}
console.log(capitalization("This is a title"));
console.log(capitalization("capitalize every word"));
