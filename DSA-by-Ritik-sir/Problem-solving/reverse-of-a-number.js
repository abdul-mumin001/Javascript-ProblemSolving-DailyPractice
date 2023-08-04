function reverse(a){
    let x=a%10;
    let b=Math.floor(a/10);
    let y=b%10;
    let z=Math.floor(b/10);
    return(x+","+y+","+z)
  
    
  }
  console.log(reverse(156))