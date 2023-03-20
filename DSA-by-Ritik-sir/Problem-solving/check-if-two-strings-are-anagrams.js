// Given two strings "a" and string 'b', we have to check if they are anagrams of each other or not and return True/False.
//  For example,

// Input-1 :

// String a= “india”
// String b= “nidia”

// Output :
// True

// Explanation − Since the given string ‘b’ contains all the characters in the string ‘a’ thus we will return True.

// Input-2 :
// String a= “hackathon”
// String b= “achcthoon”

// Output :
// False



function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("indian","ndiani")
 checkStringsAnagram('hackathon','achcthoon')