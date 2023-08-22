// Q. Given two arrays. Check if both arrays are equal or not.
// An equal array is one which has equal frequencies of elements. If both the arrays are equal return `true`
// return `false` 
// Input:
// [1, 5, 7, 8]
// [5, 8, 7, 1]
// Output:
// true

function isArray(arr1,arr2){
    let X=0;
    for(let i=0;i<arr1.length;i++){
        X+=arr1[i]
        // console.log(arr1[i]);
        console.log(X);
    }

    let Y=0;
    for(let j=0;j<arr2.length;j++){
        Y+=arr2[j]
        // console.log(arr2[j]);
        console.log(Y);
    }
    
    if(X==Y){
        return true;
    }else{
        return false;
    }
}
console.log(isArray([1, 5, 7, 8], [5, 8, 7, 1]));
console.log(isArray([1, 2, 3], [2, 4, 6]));