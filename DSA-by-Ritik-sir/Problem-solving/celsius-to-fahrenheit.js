// Q. Celsius to Fahrenheit
// Take temperature as input and convert it from celsius to fahrenheit.

// Eg 1:
// 32 <br>
// Output:
// 89.60

// Eg 2:
// 25 <br>
// Output :
// 77

function celToFah(a) {
  let temp = a;
  let Fah = (temp * 9) / 5 + 32;
  return Fah;
}
console.log(celToFah(25));
console.log(celToFah(37));
