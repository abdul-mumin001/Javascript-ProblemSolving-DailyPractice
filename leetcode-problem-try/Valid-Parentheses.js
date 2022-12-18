// Q. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true



var isValid = function(s) {
    let stak=[];
    for(let i=0;i<s.length;i++){
        let character=stak[stak.length-1];
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            stak.push(s[i])
        }else if((character=='(' && s[i]==')') || (character=='{' && s[i]=='}') || (character=='[' && s[i]==']')){
            stak.pop();
        }else{
            return false;
        }
    }
    return stak.length ?false : true;
};

console.log(isValid("()[]{}"))



const isValid = (s) => {
    const map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const stack = [];
    for (let i of s) {
        if (map[i]) stack.push(map[i]) 
        if (!map[i] && i !== stack.pop()) return false
    }
    return stack.length === 0
};