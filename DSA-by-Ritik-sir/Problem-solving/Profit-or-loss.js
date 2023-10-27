// Q Profit or Loss
// Aman is buying the apple at price x and selling the same apple to Ankush at price y. Check if Aman is in Profit
// or Loss.

// Eg 1:
// x = 50, y = 70
// Output:
// profit

// Eg 2:
// x = 50, y = 30
// output :
// loss

function determine(x, y) {
  if (x < y) {
    return "profit";
  } else {
    return "loss";
  }
}
console.log(determine(50, 70));
console.log(determine(50, 30));
