// 1. Print the multiplication table with 7

for(let i = 1; i <= 10; i++){
    let row = "7 * " + i + " = " + 7 * i;
    console.log(row);
}




// 2. Print all the multiplication tables with numbers from 1 to 10

for(let i = 1; i <= 10; i++){
    printTable(i);
    console.log("");
}

function printTable(n){
    for(let i = 1; i <= 10; i++)
    {
        let row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}






// 3. Calculate the sum of numbers from 1 to 10

let sum = 0;

for(let i = 1; i <= 10; i++){
    sum += i;
}

console.log(sum);





// 4. Calculate 10!

let prod = 1;

for(let i = 1; i <= 10; i++){
    prod *= i;
}

console.log(prod);






// 5. Calculate the sum of odd numbers greater than 10 and less than 30

let s = 0;

for(let i = 11; i <= 30; i += 2){
    
    s += i;
}

console.log(s);






// 6. Create a function that will convert from Celsius to Fahrenheit

function celsiusToFahrenheit(n){
    return n * 1.8 + 32;
}

let r = celsiusToFahrenheit(20);

console.log(r);





// 7. Create a function that will convert from Fahrenheit to Celsius

function fahrenheitToCelsius(n){
    return (n - 32) / 1.8;
}

let ra = fahrenheitToCelsius(68);

console.log(ra);






// 8. Calculate the sum of numbers in an array of numbers.

function sumArray(ar){
    let summ = 0;
    
    for(let i = 0; i < ar.length; i++)
    {
        summ += ar[i];
    }
    
    return summ;
}

let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let summ = sumArray(ar);
console.log(summ);





// 9. Calculate the average of the numbers in an array of numbers

function averageArray(arrr){

    let n = arrr.length;
    let summm = 0;
    
    for(let i = 0; i < n; i++){

        summm += ar[i];
    }
    
    return summm / n;
}

let arrr = [1, 3, 9, 15, 90];
let avg = averageArray(arrr);

console.log("Average: ", avg);






// 10.Create a function that receives an array of numbers and returns an array containing only the positive numbers

// Method 1
function getPositives(r){
    let r2 = [];
    
    for(let i = 0; i < r.length; i++){
        let el = r[i];
        
        if (el >= 0){
            r2.push(el);
        }
    }
    
    return r2;
}

r= [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let r2 = getPositives(r);

console.log(r2);



// 10. Create a function that receives an array of numbers and returns an array containing only the positive numbers. 

// Method 2 

function getPositives(r3){
    let r4 = [];
    
    for(let el of r3){
        if (el >= 0){
            r4.push(el);
        }
    }
    
    return r4;
}

let r3 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let r4 = getPositives(r3);

console.log(r4);



// 10. Create a function that receives an array of numbers and returns an array containing only the positive numbers

// Method3

function getPositives(r5){

    return r5.filter(el => el >= 0);
}

let r5 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let r6 = getPositives(r5);

console.log(r6);





// 11. Find the maximum number in an array of numbers

function findMax(a){
    
    let max = a[0];
    
    for(let i = 0; i < a.length; i++){
        if (a[i] > max){
            max = a[i];
        }
    }
    
    return max;
}

let a = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max = findMax(a);

console.log("Max: ", max);





// 12. Print the first 10 Fibonacci numbers without recursion


let f0 = 0;
console.log(f0);

let f1 = 1;
console.log(f1);

for(let i = 2; i < 10; i++){
    let fi = f1 + f0;
    console.log(fi);
    
    f0 = f1;
    f1 = fi;
}





// 13. Create a function that will find the nth Fibonacci number using recursion

function findFibonacci(n){
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

let n = findFibonacci(10);

console.log(n);




// 14. Create a function that will return a Boolean specifying if a number is prime

function isPrime(n){
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    let maxDiv = Math.sqrt(n);
    
    for(let i = 2; i <= maxDiv; i++){
        if (n % i == 0){
            return false;
        }
    }
    
    return true;
}

console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(9, " is prime? ", isPrime(9));





// 15. Calculate the sum of digits of a positive integer number

function sumDigits(n){
    let s = n.toString();
    let sm = 0;
    
    for(let char of s){
        let digit = parseInt(char);
        sm += digit;
    }
    
    return sm;
}

let sm = sumDigits(1235231);
console.log("Sum: ", sm);





// 16. Print the first 100 prime numbers

printPrimes(100);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes){
    let n = 0;
    let i = 2;
    
    while(n < nPrimes){
        if (isPrime(i)){
            console.log(n, " --> ", i);
            n++;
        }
        
        i++;
    }
}


// Returns true if a number is prime
function isPrime(n){
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    let maxDiv = Math.sqrt(n);
    
    for(let i = 2; i <= maxDiv; i++){
        if (n % i == 0){
            return false;
        }
    }
    
    return true;
}





// 17. Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

console.log(getPrimes(10, 100));

function getPrimes(nPrimes, startAt){
    let ar = [];
    
    let i = startAt;
    
    while(ar.length < nPrimes){
        if (isPrime(i)){
            ar.push(i);
        }
        
        i++;
    }
    
    return ar;
}

// Returns true if a number is prime
function isPrime(n){
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    let maxDiv = Math.sqrt(n);
    
    for(let i = 2; i <= maxDiv; i++){
        if (n % i == 0){
            return false;
        }
    }
    
    return true;
}





// 18. Rotate an array to the left 1 position

let ar1 = [1, 2, 3];
rotateLeft(ar1);
console.log(ar1);

function rotateLeft(ar1)
{
    let first = ar1.shift();
    ar1.push(first);
}