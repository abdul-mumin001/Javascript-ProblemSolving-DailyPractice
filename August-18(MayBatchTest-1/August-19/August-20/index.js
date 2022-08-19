
// 2.Print all even numbers from 0 – 10

// 3. Print the odd numbers less than 100

// 4.Print all the multiplication tables with numbers from 1 to 10

// 5.Calculate the sum of numbers from 1 to 10

//  1. Take a 3 digit number and print the reverse of that number.
//  i/p=123;  o/p=3,2,1 

function reverse(a){
    
    let x=a%10;
    let b=Math.floor(a/10)
    let y=b%10;
    let z=Math.floor(b/10)
    return (x+","+y+","+z)
    
   
  }
  console.log(reverse(123))


//   3.Print the odd numbers less than 100

for(var i = 1; i <= 100; i += 2)
{
    console.log(i) 
}


//4. Print all the multiplication tables with numbers from 1 to 10
for(var i = 1; i <= 10; i++)
{
    printTable(i);
    console.log("");
}
function printTable(n)
{
    for(var i = 1; i <= 10; i++)
    {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}



//5. Calculate the sum of numbers from 1 to 10

var sum = 0;

for(var i = 1; i <= 10; i++)
{
    sum += i;
}

console.log(sum);



