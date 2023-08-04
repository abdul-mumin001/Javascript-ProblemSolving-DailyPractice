function reverse(a) {
  let x=a%10;
  console.log(x);
  let b=Math.floor(a/10);
  console.log(b);
  let y=b%10;
  console.log(y);
  let z=Math.floor(b/10);
  console.log(z);
  return(x+","+y+","+z)

//   return parseFloat(a.toString().split("").reverse().join("")) * Math.sign(a);
}
console.log(reverse(156));
console.log(reverse(-156));
