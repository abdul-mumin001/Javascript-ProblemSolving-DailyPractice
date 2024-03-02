// Q Given an object containing a list of items present in the cart. Find if the order is eligible for
//  free delivery or not. If the order amount is greater than $50.00 it is eligible for free delivery

// Input:
// ```
// { "Shampoo": 5.99, "Rubber Ducks": 15.99 }
// ```
// Output:
// ```
// false
// ```
// Input:
// ```
// { "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }
// ```
// Output:
// ```
// true
// ```

function freeDelivery(obj) {
  let amount = Object.values(obj);
  console.log(amount);
  let sum = 0;
  for (let i of amount) {
    sum = sum + i;
  }
  if (sum > 50) {
    return true;
  } else {
    return false;
  }
}
console.log(
  freeDelivery({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
);
console.log(freeDelivery({ Shampoo: 5.99, "Rubber Ducks": 15.99 }));
