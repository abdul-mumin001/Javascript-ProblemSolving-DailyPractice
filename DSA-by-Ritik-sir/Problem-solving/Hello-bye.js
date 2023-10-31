// Q Hello-Bye
// Write a program to display "Hello" if a number entered by the user is a multiple of five , otherwise print
// "Bye".

// Eg 1:
// 10 <br>
// Output:
// "Hello"

// Eg 2:
// 7 <br>
// Output :
// "Bye"

function hello_bye(num) {
  if (num % 5 == 0) {
    return "Hello";
  } else {
    return "Bye";
  }
}
console.log(hello_bye(7));
console.log(hello_bye(10));
