function stair(n) {
    if(n == 1)
        return 1;
    if(n == 2)
        return 2;
   
    let f = stair(n-1) + stair(n-2);
    return f;
}
 
console.log(stair(5));
 
// 1, 2, 3 at a time
