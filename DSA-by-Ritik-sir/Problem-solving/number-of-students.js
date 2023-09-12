// Q Abhishek choudhary is the teacher of a higher secondary school. He was assigned a task to record the number
// of students in each class. The 1st class has ‘A ’ students and 2nd class has ‘B’ students. He completed noting
//  down all the classes but till he reached class xth the school was over. When he was going through the list he
//   noticed that the next class had students equal to the sum of its last two classes. Can you help him to find
//   out the number of students present in xth class using the above details.

// Input:
// Input are provided as functions parameters.
// Output:
// Numbers of students (integer)

// eg:
// a = 20
// b = 30
// output:
// 1440

function students(a, b) {
  let c = a + b;
  let d = c + b;
  let e = d + c;
  let f = d + e;
  let g = f + e;
  let h = g + f;
  let i = h + g;
  let j = i + h;
  return j;
}

console.log(students(20, 30));
