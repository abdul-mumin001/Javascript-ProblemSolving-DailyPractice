function reverse(a) {
  // let x=a%10;
  // let b=Math.floor(a/10);
  // let y=b%10;
  // let z=Math.floor(b/10);
  // return(x+","+y+","+z)

  return parseFloat(a.toString().split("").reverse().join("")) * Math.sign(a);
}
console.log(reverse(156));
console.log(reverse(-156));
