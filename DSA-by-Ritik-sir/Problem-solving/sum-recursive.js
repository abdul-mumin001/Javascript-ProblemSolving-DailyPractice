// sum recursive
function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
  }
console.log(sum(5)) 
console.log(sum(7))
console.log(sum(10)) 