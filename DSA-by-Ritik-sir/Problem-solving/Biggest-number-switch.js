// Q. Use Switch case:
// #No if else is allowed.
// Take 3 numbers and find  and return biggest of them.
// If all three numbers are same than print "None of them is biggest"

// if there are two numbers same as biggest than also print "None of them is biggest"

// Eg:
// 10<br>
// 30 <br>
// 20 <br>

// Output:
// 30

// Eg:
// 11<br>
// 22<br>
// 22<br>
// Output:
// "None of them is biggest"

function biggest(a, b, c) {
  switch (a > b && a > c) {
    case true:
      return a;
      break;
  }
  switch (a < b && b > c) {
    case true:
      return b;
      break;
  }
  switch (a < c && b < c) {
    case true:
      return c;
      break;
  }
  switch (a == b || b == c || a == c) {
    case true:
      return "None of them is biggest";
      break;
  }
}
console.log(biggest(10, 30, 20));
console.log(biggest(20, 10, 20));
