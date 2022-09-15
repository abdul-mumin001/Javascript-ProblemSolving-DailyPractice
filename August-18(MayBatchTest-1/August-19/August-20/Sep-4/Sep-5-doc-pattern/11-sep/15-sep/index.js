// find the squareroot of number 

function squareroot(number) {
    for (var i = number; i >= 1; i--) {
        if (i * i === number) {
            number = i;
            break;
       }
   }
   return number;
}

console.log(squareroot(81))
