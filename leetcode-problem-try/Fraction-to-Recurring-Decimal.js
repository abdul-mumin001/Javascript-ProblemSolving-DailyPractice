// Q. Fraction to Recurring Decimal

// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

// If the fractional part is repeating, enclose the repeating part in parentheses.

// If multiple answers are possible, return any of them.

// It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

 

// Example 1:

// Input: numerator = 1, denominator = 2
// Output: "0.5"
// Example 2:

// Input: numerator = 2, denominator = 1
// Output: "2"
// Example 3:

// Input: numerator = 4, denominator = 333
// Output: "0.(012)"



var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return '0';
   var result = '';
   result += (numerator > 0) ^ (denominator > 0) ? '-' : '';
   var num = Math.abs(numerator),
     den = Math.abs(denominator);
     
    //  console.log(num)
    //  console.log(den)
 
   result += Math.floor(num / den);
 
   num %= den;
   if (num === 0) {
     return result;
   }
 
   result += '.';
   var map = {};
   while (num !== 0) {
     map[num] = result.length;
 
     num *= 10;
     result += Math.floor(num / den);
     num %= den;
 
     var repeatingFractionStart = map[num];
     if (repeatingFractionStart !== undefined) {
       result = result.substring(0, repeatingFractionStart) + '(' + result.substring(repeatingFractionStart) + ')';
       break;
     }
   }
   return result.toString();
 };
 console.log(fractionToDecimal(4,333))
 console.log(fractionToDecimal(1,2))