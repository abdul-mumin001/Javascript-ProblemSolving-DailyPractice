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