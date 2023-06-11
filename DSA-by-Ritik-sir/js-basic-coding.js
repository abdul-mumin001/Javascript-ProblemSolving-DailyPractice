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