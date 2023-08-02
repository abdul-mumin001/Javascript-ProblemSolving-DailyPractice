// // 1. Print the multiplication table with 7

// for(let i = 1; i <= 10; i++){
//     let row = "7 * " + i + " = " + 7 * i;
//     console.log(row);
// }

// // 2. Print all the multiplication tables with numbers from 1 to 10

// for(let i = 1; i <= 10; i++){
//     printTable(i);
//     console.log("");
// }

// function printTable(n){
//     for(let i = 1; i <= 10; i++)
//     {
//         let row = n + " * " + i + " = " + n * i;
//         console.log(row);
//     }
// }

// // 3. Calculate the sum of numbers from 1 to 10

// let sum = 0;

// for(let i = 1; i <= 10; i++){
//     sum += i;
// }

// console.log(sum);

// // 4. Calculate 10!

// let prod = 1;

// for(let i = 1; i <= 10; i++){
//     prod *= i;
// }

// console.log(prod);

// // 5. Calculate the sum of odd numbers greater than 10 and less than 30

// let s = 0;

// for(let i = 11; i <= 30; i += 2){

//     s += i;
// }

// console.log(s);

// // 6. Create a function that will convert from Celsius to Fahrenheit

// function celsiusToFahrenheit(n){
//     return n * 1.8 + 32;
// }

// let r = celsiusToFahrenheit(20);

// console.log(r);

// // 7. Create a function that will convert from Fahrenheit to Celsius

// function fahrenheitToCelsius(n){
//     return (n - 32) / 1.8;
// }

// let ra = fahrenheitToCelsius(68);

// console.log(ra);

// // 8. Calculate the sum of numbers in an array of numbers.

// function sumArray(ar){
//     let summ = 0;

//     for(let i = 0; i < ar.length; i++)
//     {
//         summ += ar[i];
//     }

//     return summ;
// }

// let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// let summ = sumArray(ar);
// console.log(summ);

// // 9. Calculate the average of the numbers in an array of numbers

// function averageArray(arrr){

//     let n = arrr.length;
//     let summm = 0;

//     for(let i = 0; i < n; i++){

//         summm += ar[i];
//     }

//     return summm / n;
// }

// let arrr = [1, 3, 9, 15, 90];
// let avg = averageArray(arrr);

// console.log("Average: ", avg);

// // 10.Create a function that receives an array of numbers and returns an array containing only the positive numbers

// // Method 1
// function getPositives(r){
//     let r2 = [];

//     for(let i = 0; i < r.length; i++){
//         let el = r[i];

//         if (el >= 0){
//             r2.push(el);
//         }
//     }

//     return r2;
// }

// r= [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let r2 = getPositives(r);

// console.log(r2);

// // 10. Create a function that receives an array of numbers and returns an array containing only the positive numbers.

// // Method 2

// function getPositives(r3){
//     let r4 = [];

//     for(let el of r3){
//         if (el >= 0){
//             r4.push(el);
//         }
//     }

//     return r4;
// }

// let r3 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let r4 = getPositives(r3);

// console.log(r4);

// // 10. Create a function that receives an array of numbers and returns an array containing only the positive numbers

// // Method3

// function getPositives(r5){

//     return r5.filter(el => el >= 0);
// }

// let r5 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let r6 = getPositives(r5);

// console.log(r6);

// // 11. Find the maximum number in an array of numbers

// function findMax(a){

//     let max = a[0];

//     for(let i = 0; i < a.length; i++){
//         if (a[i] > max){
//             max = a[i];
//         }
//     }

//     return max;
// }

// let a = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let max = findMax(a);

// console.log("Max: ", max);

// // 12. Print the first 10 Fibonacci numbers without recursion

// let f0 = 0;
// console.log(f0);

// let f1 = 1;
// console.log(f1);

// for(let i = 2; i < 10; i++){
//     let fi = f1 + f0;
//     console.log(fi);

//     f0 = f1;
//     f1 = fi;
// }

// // 13. Create a function that will find the nth Fibonacci number using recursion

// function findFibonacci(n){
//     if (n == 0)
//         return 0;

//     if (n == 1)
//         return 1;

//     return findFibonacci(n - 1) + findFibonacci(n - 2);
// }

// let n = findFibonacci(10);

// console.log(n);

// // 14. Create a function that will return a Boolean specifying if a number is prime

// function isPrime(n){
//     if (n < 2)
//         return false;

//     if (n == 2)
//         return true;

//     let maxDiv = Math.sqrt(n);

//     for(let i = 2; i <= maxDiv; i++){
//         if (n % i == 0){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(2, " is prime? ", isPrime(2));
// console.log(3, " is prime? ", isPrime(3));
// console.log(4, " is prime? ", isPrime(4));
// console.log(5, " is prime? ", isPrime(5));
// console.log(9, " is prime? ", isPrime(9));

// // 15. Calculate the sum of digits of a positive integer number

// function sumDigits(n){
//     let s = n.toString();
//     let sm = 0;

//     for(let char of s){
//         let digit = parseInt(char);
//         sm += digit;
//     }

//     return sm;
// }

// let sm = sumDigits(1235231);
// console.log("Sum: ", sm);

// // 16. Print the first 100 prime numbers

// printPrimes(100);

// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes){
//     let n = 0;
//     let i = 2;

//     while(n < nPrimes){
//         if (isPrime(i)){
//             console.log(n, " --> ", i);
//             n++;
//         }

//         i++;
//     }
// }

// // Returns true if a number is prime
// function isPrime(n){
//     if (n < 2)
//         return false;

//     if (n == 2)
//         return true;

//     let maxDiv = Math.sqrt(n);

//     for(let i = 2; i <= maxDiv; i++){
//         if (n % i == 0){
//             return false;
//         }
//     }

//     return true;
// }

// // 17. Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

// console.log(getPrimes(10, 100));

// function getPrimes(nPrimes, startAt){
//     let ar = [];

//     let i = startAt;

//     while(ar.length < nPrimes){
//         if (isPrime(i)){
//             ar.push(i);
//         }

//         i++;
//     }

//     return ar;
// }

// // Returns true if a number is prime
// function isPrime(n){
//     if (n < 2)
//         return false;

//     if (n == 2)
//         return true;

//     let maxDiv = Math.sqrt(n);

//     for(let i = 2; i <= maxDiv; i++){
//         if (n % i == 0){
//             return false;
//         }
//     }

//     return true;
// }

// // 18. Rotate an array to the left 1 position

// let ar1 = [1, 2, 3,4,5];
// rotateLeft(ar1);
// console.log(ar1);

// function rotateLeft(ar1){
//     let first = ar1.shift();

//     ar1.push(first);
// }

// // 19. Rotate an array to the right 1 position

// let a1 = [1, 2, 3];
// rotateRight(a1);
// console.log(a1);

// function rotateRight(a1){
//     let last = a1.pop();
//     a1.unshift(last);

// }

// // 20.Reverse an array

// let a2 = [1, 2, 3];
// let a3 = reverseArray(a2);
// console.log(a3);

// function reverseArray(a2)
// {
//     let a3 = [];

//     for(let i = a2.length - 1; i >= 0; i--)
//     {
//         a3.push(a2[i]);
//     }

//     return a3;
// }

// // 21. Reverse a string

// let s1 = reverseString("JavaScript");
// console.log(s1);

// function reverseString(s1){
//     let s2 = "";

//     for(let i = s1.length - 1; i >= 0; i--){
//         let char = s1[i];
//         s2 += char;
//     }

//     return s2;
// }

// // 22.  Create a function that will merge two arrays and return the result as a new array

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr = mergeArrays(arr1, arr2);

// console.log(arr);

// function mergeArrays(arr1, arr2){

//    let arr = [];

//    for(let el of arr1){

//        arr.push(el);
//    }

//    for(let el of arr2){
//        arr.push(el);
//    }

//    return arr;
// }

// // 23. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are
// // either in the first array or second array but not in both

// let aar1 = [1, 2, 3, 10, 5, 3, 14];
// let aar2 = [1, 4, 5, 6, 14];

// let aar = mergeExclusive(aar1, aar2);

// console.log(aar);

// function mergeExclusive(aar1, aar2){

//     let aar = [];

//     for(let el of aar1){
//         if (!aar2.includes(el)){
//             aar.push(el);
//         }
//     }

//     for(let el of aar2){
//         if (!aar1.includes(el)){
//             aar.push(el);
//         }
//     }

//     return aar;
// }

// // 24. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in
// // the second

// // let aarr1 = [1, 2, 3, 10, 5, 3, 14];
// // let aarr2 = [-1, 4, 5, 6, 14];

// // let aarr = mergeLeft(aarr1, aarr2);

// // console.log(aarr);

// // function mergeLeft(aarr1, aarr2){

// //     let aarr = [];

// //     for(let el of aarr1){
// //         if (!aarr2.includes(el)){
// //             aarr.push(el);
// //         }
// //     }

// //     return aarr;
// // }

// // 25. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

// Method 1

// let ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
// console.log(ar);

// function getDistinctElements(ar){
//     let ar2 = [];

//     for(let i = 0; i < ar.length; i++){
//         if (!isInArray(ar[i], ar2)){
//             ar2.push(ar[i]);
//         }
//     }

//     return ar2;
// }

// function isInArray(n, ar){
//     for(let i = 0; i < ar.length; i++){
//         if (ar[i] === n)
//             return true;
//     }

//     return false;
// }

// Method 2

let ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);

console.log(ar);

function getDistinctElements(ar) {
  let ar2 = [];

  let lastIndex = ar.length - 1;

  for (let i = 0; i <= lastIndex; i++) {
    if (!isInArray(ar[i], ar, i + 1, lastIndex)) {
      ar2.push(ar[i]);
    }
  }
  return ar2;
}

function isInArray(n, ar, fromIndex, toIndex) {
  for (let i = fromIndex; i <= toIndex; i++) {
    if (ar[i] === n) return true;
  }
  return false;
}

// 26. Calculate the sum of first 100 prime numbers

let n = 10;
console.log("Sum of first ", n, " primes is ", sumPrimes(10));

function sumPrimes(n) {
  let foundPrimes = 0;
  let i = 2;
  let sum = 0;
  while (foundPrimes < n) {
    if (isPrime(i)) {
      foundPrimes++;
      sum += i;
    }
    i++;
  }
  return sum;
}

// Returns true if number n is prime

function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  let maxDiv = Math.sqrt(n);

  for (let i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 27. Print the distance between the first 100 prime numbers

printDistances(100);
// Print distances between the first n prime numbers
function printDistances(n) {
  let lastPrime = 2;
  let i = lastPrime + 1;
  let foundPrimes = 1;

  while (foundPrimes < n) {
    if (isPrime(i)) {
      console.log(i - lastPrime, "\t", i, " - ", lastPrime);
      foundPrimes++;
      lastPrime = i;
    }
    i++;
  }
}
// Returns true if number n is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  let maxDiv = Math.sqrt(n);
  for (let i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 28. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should
// be also provided as string.

// Method 1

// let n1 = "2909034221912398942349";
// let n2 = "1290923909029309499";
// let sum = add(n1, n2);

// console.log(n1, "\n", n2, "\n", sum);

// function add(sNumber1, sNumber2){
//     let s = "";
//     let carry = 0;

//     let maxSize = Math.max(sNumber1.length, sNumber2.length);

//     for(let i = 0; i < maxSize; i++){
//         let digit1 = digitFromRight(sNumber1, i);
//         let digit2 = digitFromRight(sNumber2, i);

//         let sum = digit1 + digit2 + carry;
//         let digitSum = sum % 10;
//         carry = sum >= 10 ? 1 : 0;

//         s = digitSum.toString() + s;
//     }

//     if (carry > 0)
//         s = carry + s;

//     return s;
// }

// function digitFromRight(s, digitNo){
//     if (digitNo >= s.length)
//         return 0;

//     let char = s[ s.length - 1 - digitNo ];
//     return parseInt(char);
// }

// Method 2

let n1 = "2909034221912398942349";
let n2 = "1290923909029309499";
let sum = add(n1, n2);

console.log(n1);
console.log(n2);
console.log(sum);

function add(sNumber1, sNumber2) {
  let maxSize = Math.max(sNumber1.length, sNumber2.length);

  let s1 = sNumber1.padStart(maxSize, "0");
  let s2 = sNumber2.padStart(maxSize, "0");

  let s = "";
  let carry = 0;

  for (let i = maxSize - 1; i >= 0; i--) {
    let digit1 = parseInt(s1[i]);
    let digit2 = parseInt(s2[i]);

    let sum = digit1 + digit2 + carry;
    let digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry + s;

  return s;
}

// 29. Create a function that will return the number of words in a text

// Method 1

// function countWords(text) {
//   let wasSeparator = true;
//   let words = 0;

//   for (let c of text) {
//     // if current character is separator then advance and
//     // set that the previous character was separator
//     if (isSeparator(c)) {
//       wasSeparator = true;
//       continue;
//     }
//     // if current character is not separator
//     // but if previous was separator...
//     if (wasSeparator) {
//       words++;
//       wasSeparator = false;
//     }
//   }
//   return words;
// }
// function isSeparator(c) {
//   let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
//   return separators.includes(c);
// }
// console.log(countWords(""));
// console.log(countWords("            "));
// console.log(countWords("JavaScript!!!   "));
// console.log(countWords("     JavaScript"));
// console.log(countWords("    JavaScript is cool      "));
// console.log(countWords("I like to learn JavaScript with codeguppy"));

// Method 2

function countWords(text) {
  let words = 0;

  if (text.length > 0 && !isSeparator(text[0])) words++;

  for (let i = 1; i < text.length; i++) {
    let currChr = text[i];
    let prevChr = text[i - 1];

    if (!isSeparator(currChr) && isSeparator(prevChr)) {
      words++;
    }
  }
  return words;
}
function isSeparator(c) {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

console.log(countWords(""));
console.log(countWords("            "));
console.log(countWords("JavaScript!!!   "));
console.log(countWords("     JavaScript"));
console.log(countWords("    JavaScript is cool      "));
console.log(countWords("I like to learn JavaScript with codeguppy"));

// 30. Create a function that will capitalize the first letter of each word in a text

console.log(
  captializeWords(
    "Create a function that will capitalize the first letter of each word in a text"
  )
);

function captializeWords(text) {
  let text2 = "";

  for (let i = 0; i < text.length; i++) {
    let currChr = text[i];
    let prevChr = i > 0 ? text[i - 1] : " ";

    if (!isSeparator(currChr) && isSeparator(prevChr)) {
      currChr = currChr.toUpperCase();
    }
    text2 += currChr;
  }
  return text2;
}

function isSeparator(c) {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

// 31. Calculate the sum of numbers received in a comma delimited string

// console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

// function sumCSV(s) {
//   let ar = s.split(",");
//   let sum = 0;

//   for (let n of ar) {
//     sum += parseFloat(n);
//   }

//   return sum;
// }

// 32. Create a function that will return an array with words inside a text

// let text =
//   "Create a function, that will return an array (of string), with the words inside the text";

// console.log(getWords(text));

// function getWords(text) {
//   let startWord = -1;
//   let ar = [];

//   for (let i = 0; i <= text.length; i++) {
//     let c = i < text.length ? text[i] : " ";

//     if (!isSeparator(c) && startWord < 0) {
//       startWord = i;
//     }

//     if (isSeparator(c) && startWord >= 0) {
//       let word = text.substring(startWord, i);
//       ar.push(word);

//       startWord = -1;
//     }
//   }

//   return ar;
// }

// function isSeparator(c) {
//   let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
//   return separators.includes(c);
// }

// 33. Create a function to convert a CSV text to a “bi-dimensional” array

let data =
  "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

let arr = csvToArray(data);
console.log(JSON.stringify(arr));

function csvToArray(data) {
  let arLines = data.split("\n");
  for (let i = 0; i < arLines.length; i++) {
    let arLine = arLines[i].split(";");
    arLines[i] = arLine;
  }
  return arLines;
}

// 34. Create a function that converts a string to an array of characters

function getChars(s) {
  return Array.from(s);
}

console.log(getChars("I like JavaScript"));

// 35. Create a function that will convert a string in an array containing the ASCII codes of each character.

function getCharCodes(s) {
  let ar = [];

  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    ar.push(code);
  }
  return ar;
}
console.log(getCharCodes("I like JavaScript"));

// 36. Create a function that will convert an array containing ASCII codes in a string

function codesToString(ar) {
  return String.fromCharCode(...ar);
}

console.log(
  codesToString([
    73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116,
  ])
);

// 37. Implement the Caesar cypher

let text = "I LOVE JAVASCRIPT";
let textEnc = encrypt(text, 13);
let textDec = decrypt(textEnc, 13);

console.log(text);
console.log(textEnc);
console.log(textDec);

// Decrypt a message by using the same encrypt function
// ... but using the inverse of the key (e.g. rotate in the other direction)
function decrypt(msg, key) {
  return encrypt(msg, key * -1);
}

// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key
function encrypt(msg, key) {
  let encMsg = "";

  for (let i = 0; i < msg.length; i++) {
    let code = msg.charCodeAt(i);

    // Encrypt only letters in 'A' ... 'Z' interval
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }

    encMsg += String.fromCharCode(code);
  }

  return encMsg;
}

// Modulo function: n mod p
function mod(n, p) {
  if (n < 0) n = p - (Math.abs(n) % p);

  return n % p;
}

// 38.Implement the bubble sort algorithm for an array of numbers

let arrr = [23, 1000, 1, -1, 8, 3];

console.log(arrr);
bubbleSort(arrr);
console.log(arrr);

function bubbleSort(arrr) {
  let shouldSort = true;
  let length = arrr.length;

  while (shouldSort) {
    shouldSort = false;
    length--;

    for (let i = 0; i < length; i++) {
      let a = arrr[i];
      if (a > arrr[i + 1]) {
        arrr[i] = arrr[i + 1];
        arrr[i + 1] = a;
        shouldSort = true;
      }
    }
  }
}

// 39. Create a function to calculate the distance between two points defined by their x, y coordinates

console.log(getDistance(100, 100, 400, 300));

function getDistance(x1, y1, x2, y2) {
  let l1 = x2 - x1;
  let l2 = y2 - y1;

  return Math.sqrt(l1 * l1 + l2 * l2);
}

// 40. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are
// intersecting

console.log(collisionCircleCircle(200, 200, 100, 300, 300, 50));

function collisionCircleCircle(
  circle1X,
  circle1Y,
  circle1R,
  circle2X,
  circle2Y,
  circle2R
) {
  return (
    getDistance(circle1X, circle1Y, circle2X, circle2Y) <= circle1R + circle2R
  );
}

// Calculate the distance between the two specified points
function getDistance(x1, y1, x2, y2) {
  let l1 = x2 - x1;
  let l2 = y2 - y1;

  return Math.sqrt(l1 * l1 + l2 * l2);
}

// 41. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the
// column specified by the number

let aar = [
  ["John", 120],
  ["Jane", 115],
  ["Thomas", 123],
  ["Mel", 112],
  ["Charley", 122],
];

let numbers = extractCol(aar, 1);
console.log(numbers);

function extractCol(aar, colNo) {
  let arCol = [];

  for (let i = 0; i < aar.length; i++) {
    arCol.push(aar[i][colNo]);
  }
  return arCol;
}

// 42. Create a function that will convert a string containing a binary number into a number

console.log(binaryToNumber("11111111"));

function binaryToNumber(sBinary) {
  return parseInt(sBinary, 2);
}

// 42. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers
// on an unlimited number of levels)

let arrrr = [1, 2, [15, [23], [5, 12]], [100]];

console.log(sumArray(arrrr));

function sumArray(arrrr) {
  let sum = 0;

  for (let el of arrrr) {
    // console.log(el);
    if (Array.isArray(el)) {
      el = sumArray(el);
    }
    sum += el;
  }
  return sum;
}

// 43. Find the maximum number in a jagged array of numbers or array of numbers

// Method 1

// let arrrrr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

// let max = findMax(arrrrr);
// console.log("Max  = ", max);

// // Use recursion to find the maximum numeric value in an array of arrays
// function findMax(arrrrr) {
//   let max = -Infinity;

//   // Cycle through all the elements of the array
//   for (let i = 0; i < arrrrr.length; i++) {
//     let el = arrrrr[i];

//     // If an element is of type array then invoke the same function
//     // to find out the maximum element of that subarray
//     if (Array.isArray(el)) {
//       el = findMax(el);
//     }

//     if (el > max) {
//       max = el;
//     }
//   }
//   return max;
// }

// Method 2

let arrrrr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

let max = findMax(arrrrr);
console.log("Max  = ", max);

// Use a stack to find the maximum numeric value in an array of arrays
function findMax(arElements) {
  let max = -Infinity;

  // This is the stack on which will put the first array and then
  // all the other sub-arrays that we find as we traverse an array
  let arrays = [];

  arrays.push(arElements);

  // Loop as long as are arrays added to the stack for processing
  while (arrays.length > 0) {
    // Extract an array from the stack
    arrrrr = arrays.pop();

    // ... and loop through its elements
    for (let i = 0; i < arrrrr.length; i++) {
      let el = arrrrr[i];

      // If an element is of type array, we'll add it to stack
      // to be processed later
      if (Array.isArray(el)) {
        arrays.push(el);
        continue;
      }

      if (el > max) {
        max = el;
      }
    }
  }
  return max;
}

// 44. Deep copy a jagged array with numbers or other arrays in a new array

let ar1 = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let ar2 = copyArray(ar1);

console.log(ar2);

function copyArray(ar) {
  let ar2 = [];

  for (let el of ar) {
    if (Array.isArray(el)) {
      el = copyArray(el);
    }
    ar2.push(el);
  }
  return ar2;
}

// 45. Create a function to return the longest word(s) in a string

let txt = "Create a function to return the longest word(s) in a sentance.";

console.log(getLongestWords(txt));

function getLongestWords(txt) {
  let words = getWords(txt);

  let maxSize = 0;
  let maxPositions = [];

  for (let i = 0; i < words.length; i++) {
    let currWordSize = words[i].length;

    if (currWordSize > maxSize) {
      maxSize = currWordSize;
      maxPositions = [i];
    } else if (currWordSize === maxSize) {
      maxPositions.push(i);
    }
  }

  return getElements(words, maxPositions);
}

// Get only the elements from specified positions from the array
function getElements(ar, arPositions) {
  let arNew = [];

  for (let pos of arPositions) {
    arNew.push(ar[pos]);
  }

  return arNew;
}

// Returns an array with the words from specified text
function getWords(txt) {
  let startWord = -1;
  let ar = [];

  for (let i = 0; i <= txt.length; i++) {
    let c = i < txt.length ? txt[i] : " ";

    if (!isSeparator(c) && startWord < 0) {
      startWord = i;
    }

    if (isSeparator(c) && startWord >= 0) {
      let word = txt.substring(startWord, i);
      ar.push(word);

      startWord = -1;
    }
  }
  return ar;
}

function isSeparator(c) {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
  return separators.includes(c);
}

// 46. Shuffle an array of strings

let aarr = ["Shuffle", "an", "array", "of", "strings"];

console.log(shuffleArray(aarr));

// Shuffle array implemented using Fisher–Yates shuffle algorithm
function shuffleArray(aarr) {
  for (let i = aarr.length - 1; i > 0; i--) {
    let j = randomInt(0, i - 1);

    let t = aarr[i];
    aarr[i] = aarr[j];
    aarr[j] = t;
  }

  return aarr;
}

// Get a random int between min and max (both included)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 47. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.

console.log(getRandomNumbers(10));

function getRandomNumbers(n) {
  let ar = [];

  for (let i = 1; i <= n; i++) {
    ar.push(i);
  }

  shuffleArray(ar);

  return ar;
}

// Shuffle array implemented using Fisher–Yates shuffle algorithm
function shuffleArray(ar) {
  for (let i = ar.length - 1; i > 0; i--) {
    let j = randomInt(0, i - 1);

    let t = ar[i];
    ar[i] = ar[j];
    ar[j] = t;
  }

  return ar;
}

// Get a random int between min and max (both included)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 48. Find the frequency of characters inside a string. Return the result as an array of objects. Each
// object has 2 fields: character and number of occurrences.

let aarrr = getCharFrequency(
  "Find the frequency of characters inside a string"
);
console.log(JSON.stringify(aarrr));

function getCharFrequency(text) {
  let aarrr = [];
  for (let chr of text) {
    updateFrequency(aarrr, chr);
  }

  return aarrr;
}

function updateFrequency(aarrr, chr) {
  for (let el of aarrr) {
    if (el.chr === chr) {
      el.count++;
    }
  }
  aarrr.push({ chr: chr, count: 1 });
}

// 49. Calculate Fibonacci(500) with high precision (all digits)

console.log(fibonacci(500));

function fibonacci(n) {
  if (n === 0) return "0";

  if (n === 1) return "1";

  let n1 = "0";
  let n2 = "1";

  for (let i = 2; i <= n; i++) {
    let sum = add(n1, n2);

    n1 = n2;
    n2 = sum;
  }

  return n2;
}

function add(sNumber1, sNumber2) {
  let maxSize = Math.max(sNumber1.length, sNumber2.length);

  let s1 = sNumber1.padStart(maxSize, "0");
  let s2 = sNumber2.padStart(maxSize, "0");

  let s = "";
  let carry = 0;

  for (let i = maxSize - 1; i >= 0; i--) {
    let digit1 = parseInt(s1[i]);
    let digit2 = parseInt(s2[i]);

    let sum = digit1 + digit2 + carry;
    let digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry + s;

  return s;
}


// 50. Calculate 70! with high precision (all digits)

console.log(factorial(70));

// Calculate factorial(n) ... using big number calculations
function factorial(n){
    let prod = "1";
    
    for(let i = 2; i <= n; i++){
        prod = mult(prod, i.toString());
    }
    
    return prod;
}

// Multiplies sNumber1 * sNumber2
// Each number is provided as string
function mult(sNumber1, sNumber2){
    // Calculate partial results according to multiplication algorithm
    let partialResults = [];
    
    for(let i = sNumber2.length - 1; i >= 0; i--){
        let digit = parseInt(sNumber2[i]);
        
        let partialResult = multDigit(sNumber1, digit);
        partialResult += "0".repeat(partialResults.length);
        
        partialResults.push(partialResult);
    }
    
    // Sum partial results to obtain the product
    let sum = "";
    
    for(let r of partialResults){
        sum = add(sum, r);
    }
    
    return sum;
}

// Multiplies number sNumber (as string) with a single digit number
function multDigit(sNumber, digit){
    let p = "";
    let carry = 0;
    
    for(let i = sNumber.length - 1; i >= 0; i--){
        let numberDigit = parseInt(sNumber[i]);
        
        let prod = digit * numberDigit + carry;
        let prodDigit = prod % 10;
        carry = Math.floor(prod / 10);
        
        p = prodDigit.toString() + p;
    }
    
    if (carry > 0)
        p = carry + p;
        
    return p;
}

function add(sNumber1, sNumber2){
    let maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    let s1 = sNumber1.padStart(maxSize, "0");
    let s2 = sNumber2.padStart(maxSize, "0");

    let s = "";
    let carry = 0;
    
    for(let i = maxSize - 1; i >= 0; i--){
        let digit1 = parseInt(s1[i]);
        let digit2 = parseInt(s2[i]);
        
        let sum = digit1 + digit2 + carry;
        let digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;

        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}