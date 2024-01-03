// Q Amit goes to a restaurant, but after seeing the huge menu. He was confused about what to order. Amit
//  wanted to have something which has Paneer and does not have Rice. Help Amit choose a food item.

// Input:
// ```
// ['Panner Butter Masala', 'Panner Fried Rice', 'Chicken Biryani', 'Cold Coffee']
// ```
// Output:
// ```
// Paneer Butter Masala
// ```
// Input:
// ```
// ['Panner Fried Rice', 'Chicken Biryani', 'Paneer Paratha', Cold Coffee']
// ```
// Output:
// ```
// Paneer Paratha
// ```

function order(menu) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].includes("Paneer") && !menu[i].includes("Rice")) {
      return menu[i];
    }
  }
}
console.log(
  order([
    "Paneer Butter Masala",
    "Paneer Fried Rice",
    "Chicken Biryani",
    "Cold Coffee",
  ])
);
console.log(
  order([
    "Panner Fried Rice",
    "Chicken Biryani",
    "Paneer Paratha",
    "Cold Coffee",
  ])
);
