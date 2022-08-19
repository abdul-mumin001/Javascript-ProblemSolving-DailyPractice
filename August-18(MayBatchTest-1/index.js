// Q. Accept the number of days from the user and calculate the charge for library according to following :

// Till five days : Rs 0/day.

// Six to ten days  : Rs 3/day.

// 11 to 15 days  : Rs 4/day

// After 15 days    : Rs 5/day

// constraints: 

// 0<=day<=365




function calculateCharge(no_of_days){
    let x=no_of_days;
    if(x>15){
        return ((5*3)+(5*4)+((x-15)*5))
    }
    else if(x>10){
        return ((5*3)+((x-10)*4))
    }
    else if(x>5){
        return ((x-5)*3)
    }
    else{
        return 0;
    }
}
console.log(calculateCharge(10))



// Q. Abhishek choudhary is the teacher of a higher secondary school. He was assigned a task to record the number of students
//  in each class. The 1st class has ‘A ’ students and 2nd class has ‘B’ students. He completed noting down all the classes but 
//  till he reached class xth the school was over. When he was going through the list he noticed that the next class had students
//   equal to the sum of its last two classes. Can you help him to find out the number of students present in xth class using the 
//   above details.


// constraint: 

// 1<=A,B<=100




function students(a,b){
    let c=a+b;
    let d=c+b;
    let e=d+c;
    let f=e+d;
    let g=f+e;
    let h=g+f;
    let i=h+g;
    let j=i+h;
    return j;


}
console.log(students(20,30))





