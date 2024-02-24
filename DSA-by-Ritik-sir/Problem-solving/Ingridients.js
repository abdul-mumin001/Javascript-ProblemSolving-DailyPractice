// Q Given an object containing the quantity of ingridients the chef has. For preparing a food item,
// the chef requires one quantity of each ingredient. Return how many food items the chef can prepare
// before he runs out of one of the ingridients

// Input:
// ```
// {
//   "salt": 23,
//   "oil": 12,
//   "ketchup": 10
// }
// ```
// Output:
// ```
// 10
// ```
// Input:
// ```
// {
//   "salt": 432,
//   "oil": 543,
//   "ketchup": 777
// }
// ```
// Output:
// ```
// 432
// ```

function ingridients(obj) {
  if (obj["salt"] < obj["oil"] && obj["salt"] < obj["ketchup"]) {
    return obj["salt"];
  } else if (obj["oil"] < obj["salt"] && obj["oil"] < obj["ketchup"]) {
    return obj["oil"];
  } else {
    return obj["ketchup"];
  }
}
console.log(
  ingridients({
    salt: 23,
    oil: 12,
    ketchup: 10,
  })
);
console.log(
  ingridients({
    salt: 432,
    oil: 543,
    ketchup: 777,
  })
);
