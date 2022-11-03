// Q. You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

// event1 = [startTime1, endTime1] and
// event2 = [startTime2, endTime2].
// Event times are valid 24 hours format in the form of HH:MM.

// A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

// Return true if there is a conflict between two events. Otherwise, return false.

 

// Example 1:

// Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
// Output: true
// Explanation: The two events intersect at time 2:00.
// Example 2:

// Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
// Output: true
// Explanation: The two events intersect starting from 01:20 to 02:00.
// Example 3:

// Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
// Output: false
// Explanation: The two events do not intersect.


var haveConflict = function(event1, event2) {
    if(event1[0]>event2[0]){
        var temp=event2;
        event2=event1;
        event1=temp;
    }
    return event2[0]<=event1[1];
};




var haveConflict = function(event1, event2) {
    
    const [startA, endA] = event1
    const [startB, endB] = event2
    
    
    if (startA <= startB) {
        if (endA >= startB)
            return true
    } else {
        if (endB >= startA)
            return true
    }
    
    
    
    return false;
};




// Q.Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25



var myPow = function(x, n) {
    // let pow=1;
    // for(let i=0;i<n;i++){
    //     pow=pow*x;
    // }
    // return pow;
    // for the above logic negative testcases not pass 
    

    return Math.pow(x,n);


    let res = 1;
    
    if (n === 0) {
        return 1;
    }
    
    if ( n < 0) {
        x = 1 / x;
        n = -n;
    }
    
    while( (n <= -1) || (n >= 1) ) {
        
        
        if (n % 2 === 1) {
            res *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }
    return res;
    
};