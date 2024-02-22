// Q Given an object containing the width length and height of a box. Return the volume of the box

// Input:
// ```
// { width: 7, length: 2, height: 1 }
// ```
// Output:
// ```
// 14
// ```
// Input:
// ```
// { width: 4, length: 2, height: 2 }
// ```
// Output:
// ```
// 16
// ```

function volume(obj){
    return obj["width"]*obj["length"]*obj["height"]
  }
  console.log(volume({ width: 7, length: 2, height: 1 }))
  console.log(volume({ width: 4, length: 2, height: 2 }))