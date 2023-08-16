// Q. Given a string, remove all the whitespaces and then return the new string.

// Input:
// "    java script"
// Output:
// javascript

function removeSpace(str){
    return str.replace(/ /g,'')
   }
   console.log(removeSpace("    java script"))