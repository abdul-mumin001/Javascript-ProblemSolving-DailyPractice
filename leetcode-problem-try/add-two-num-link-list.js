// Q. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]



var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let cur = dummy;
    let remainder = 0;
    
    while(l1 || l2 || remainder){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + remainder;
       
        remainder = Math.floor(sum / 10);
        let ones = sum % 10;

        cur.next = new ListNode(ones);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        cur = cur.next;
    }
    return dummy.next;
};




var addTwoNumbers = function(l1, l2) {
    let carry = 0;
  var curr;
  let p = (curr = new ListNode(0));
  var sum = 0;
  while (l1 || l2) {

    if (l1 && l2) {
      sum = l1.val + l2.val + carry;
      l1=l1.next;
      l2=l2.next;
    } else if (l1) {
      sum = l1.val + carry;
      l1=l1.next;
    } else if (l2) {
      sum = l2.val + carry;
      l2=l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = Math.floor(sum) % 10;
    curr.next = new ListNode(sum);
    curr = curr.next;

  }

  if(carry===1)
    curr.next=new ListNode(carry);
  return p.next;
};