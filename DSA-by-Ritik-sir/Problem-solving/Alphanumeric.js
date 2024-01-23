// Q Given a string, if the string is alphanumeric return true else return false.

// Input:
// ```
// DownTown
// ```
// Output:
// ```
// false
// ```
// Input:
// ```
// javascr1pt
// ```
// Output:
// ```
// true
// ```

function alphanumeric(str){
  
    for(let i=0;i<str.length;i++){
      let code=str.split("").sort().join()
      if((code.charCodeAt(i)>47 && code.charCodeAt(i)<58)){
        return true
      }else{
        return false
      }
    }
  
  }
  console.log(alphanumeric('DownTown'))
  console.log(alphanumeric('javascr1pt'))