// Q You're given the income after tax, you need to return the money that is to be spent on needs,
// wants and savings.

// You are supposed to follow 50 30 20 rule. That is 50% needs, 30% wants and 20% savings.

// Input:
// ```
// 10000
// ```
// Output:
// ```
// { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// ```
// Input:
// ```
// 50000
// ```
// Output:
// ```
// { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// ```

function needsWantsSavings(salary){
    let obj={
      Needs:0.5*salary,
      Wants:0.3*salary,
      Savings:0.2*salary,
    };
    return obj;
  }
  console.log(needsWantsSavings(10000))
  console.log(needsWantsSavings(50000))