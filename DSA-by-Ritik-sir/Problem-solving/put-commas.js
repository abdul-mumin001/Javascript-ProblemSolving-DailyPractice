// Q Given a number, format the given number by placing commas after thousand place, lakh place, etc. 
// Return the formatted string.

// Input:
// ```
// 100000
// ```
// Output:
// ```
// 1,00,000
// ```
// Input:
// ```
// 87678567465996
// ```
// Output:
// ```
// 8,76,78,56,74,65,996
// ```

function putComma(str){
    return str.toLocaleString("en-IN")
}
console.log(putComma(100000))
