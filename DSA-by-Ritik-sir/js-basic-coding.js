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