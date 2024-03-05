// Q Given an array, start index and an end index, square the elements in the given range and return the array
// Input:
// ' [2, 5, 10, 7, 5, 5, 17, 20, 15, 44, 55] 4 8'
// Output:
// ' [2,5,10,7,25,25,289,400,15,44,55] '

function square(arr, start, end) {
  let x = [];
  let arrayElement = arr.slice(start, end);
  for (let i of arrayElement) {
    x.push(i ** 2);
  }
  arr.splice(start, x.length, ...x);
  return arr;
}
console.log(square([2, 5, 10, 7, 5, 5, 17, 20, 15, 44, 55], 4, 8));

console.log(square([1, 2, 3, 4, 5] ,1, 3));
