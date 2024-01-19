// Q Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.

// Input:
// ```
// elbow
// below
// ```
// Output:
// ```
// true
// ```
// Input:
// ```
// night
// thin
// ```
// Output:
// ```
// false
// ```

function anagram(str1, str2){
    let x=str1.split("").sort().join("");
    let y=str2.split("").sort().join("");
    if(x==y){
      return true;
    }else{
      return false;
    }
  }
  console.log(anagram('elbow', 'below'))
  console.log(anagram('night', 'thin'))