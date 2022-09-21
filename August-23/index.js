// for loop practice

// sum of even Numbers 

var sum=0;
for(var num=1;num<=100;num+=1){
    if(num%2==0){
        sum=sum+num;
    }
}
console.log(sum)


var sum=0;
for(var num=2;num<=100;num+=2){
    sum=sum+num;
}

console.log(sum);



// Multiplication table 

function writeTable(num){
    for(var i=1;i<=10;i++){
        console.log(`${num} x ${i}=${num*i}`);
    }
    return `Table of ${num} is above `;
}
console.log(writeTable(2))


// pattern 

// for(var i=0;i<3;i++){
//     console.log("a a a a")
// }




function patternOfA(row,col){
    for(var i=0;i<row;i++){
        str="";
        for(var j=0;j<col;j++){
            str+="a ";
        }
        console.log(str);
    }
    
}
patternOfA(3,4)