// Q. Given a string, return the middle character, if the string length is odd, else return the 
// middle two characters.

// Input:
// ```
// test
// ```
// Output:
// ```
// es
// ```
// Input:
// ```
// testing
// ```
// Output:
// ```
// t
// ``` 

function middleChar(str){
    let middleCharacter=Math.floor(str.length/2);
    let ans=str[middleCharacter]
    if(str.length %2===0){
      ans=str[middleCharacter-1]+ans
    }
    return ans
  }
  console.log(middleChar('test'))
  console.log(middleChar('testing'))