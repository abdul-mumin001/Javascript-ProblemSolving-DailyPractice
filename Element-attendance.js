// Q A teacher is about to take the attendance of the class, you being the monitor someone informs you that one 
// student is missing. Check if the student is present in the class or not. 

// Input Format
// An array ```studentsInClass``` with list of students and a student ```student```. You need to check if the
//  ```student``` is present in the class or not.

//  Output Format
// Return ```Present``` if the student is present in the class else return ```Not Present```

// Input:
// ```
// [1, 2, 3] 2
// ```
// Output:
// ```
// Present
// ```
// Input:
// ```
// [2, 5, 10, 7, 5] 1
// ```
// Output:
// ```
// Not Present
// ```

function attendance(studentsInClass, student){
 
  
    if(studentsInClass.includes(student)==true){
      return 'Present';
    }
      return 'Not Present';
    
  
}
console.log(attendance([1, 2, 3], 2))