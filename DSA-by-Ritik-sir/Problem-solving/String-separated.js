// Q Given 3 strings, join string1 and string2 separated by string3. Return the final string.

// Input:
// javascript 
// cool 
// is
// Output:
// javascript is cool

function stringSep(str1, str2, str3){
    return `${str1} ${str3} ${str2}` 
   }
   console.log(stringSep('javascript', 
   'cool', 
   'is'))