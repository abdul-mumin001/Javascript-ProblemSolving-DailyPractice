// Q Given an object containing the list of shopping items and their respective prices. Returnt
//  the all the items that has been purchased

// Input:
// ```
// { "Shampoo": 5.99, "Rubber Ducks": 15.99 }
// ```
// Output:
// ```
// ['Shampoo', 'Rubber Ducks']
// ```
// Input:
// ```
// { "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }
// ```
// Output:
// ```
// ['Monopoly', 'Secret Hitler', 'Bananagrams']
// ```

function shopping(obj) {
  return Object.keys(obj);
}
console.log(shopping({ Shampoo: 5.99, "Rubber Ducks": 15.99 }));
console.log(
  shopping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
);
