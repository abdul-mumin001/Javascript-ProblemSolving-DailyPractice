// Q Given a string which contains an email address, return true if the given email is valid,
// else return false.


// Input:
// ```
// js@aircampus.in
// ```
// Output:
// ```
// true
// ```
// Input:
// ```
// admin@aircampus
// ```
// Output:
// ```
// false
// ```

function validEmail(str){
    if(str.endsWith('@aircampus.in')){
      return true;
    }else{
      return false;
    }
  }
  console.log(validEmail('js@aircampus.in'))