// Q.Given an array of positive integer find the maximum subarray of size k 
 

var arr=[-3,2,3,3,3,6,8,15];
 var k=4

 var sum=0;
 var currMax=0;

 for(let i=0;i<k;i++){
    sum=sum+arr[i];
 }
 currMax=sum;
 for(let i=k;i<arr.length;i++){
    console.log(i,'i')
    sum=(sum+arr[i])-arr[i-k];
    currMax=Math.max(currMax,sum);
 }
 console.log(currMax);

