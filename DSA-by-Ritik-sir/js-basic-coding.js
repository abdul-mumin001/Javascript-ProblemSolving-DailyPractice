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