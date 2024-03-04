// Q Given an array of objects containing drink and their prices, return the array such that the object 
// contains drink with lowest price first.

// Input:
// ```
// [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// ```
// Output:
// ```
// [
//   {name: "lime", price: 10},
//   {name: "lemonade", price: 50}
// ]
// ```

function sorting(obj){
    return obj.sort((a,b)=>a.price-b.price)
  }
  console.log(sorting([
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]))