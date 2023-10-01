// Q Reverse Of a Number
// Take a 3 digit number and print the reverse of that number.

// Eg 1: 
// 156 <br>
// Output: 
// 6,5,1

// Eg 2:
// -628 <br>
// output :
// -,8,2,6


function reverse(a){
    return (
      parseFloat(
        a.toString().split('').reverse().join('')
      ) * Math.sign(a)
    )
    
  }
  console.log(reverse(-156))