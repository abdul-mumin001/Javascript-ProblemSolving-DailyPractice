// Q. Sort Characters By Frequency
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of
//  times it appears in the string. Return the sorted string. If there are multiple answers, return any of them.

// Example 1:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.




var frequencySort = function(s) {
    let obj={};
    let str='';
for(let i=0;i<s.length;i++) {
    if(obj[s[i]]){
        obj[s[i]] += 1;
    } else {
        obj[s[i]] = 1
    }
}
let arr = Object.entries(obj);
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j] && arr[j][1] > arr[i][1]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i][1];j++){
        str += arr[i][0]
    }  
}
return str;
    
};

console.log(frequencySort('cccaaa'));
console.log(frequencySort('Aabb'));
