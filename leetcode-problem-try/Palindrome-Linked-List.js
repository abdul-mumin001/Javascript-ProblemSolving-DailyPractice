// Q. Palindrome Linked List
// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false




var isPalindrome = function(head) {
    
    let fast_pointer = head;
    let slow_pointer = head;
  // when fast_ppointer reaches to the tail, slow_pointer will be in the middle
    
  while (fast_pointer && fast_pointer.next) {
    fast_pointer = fast_pointer.next.next;
    slow_pointer = slow_pointer.next;
  }
  // slow_pointer is in the middle and we reverse from slow_pointer till the head
  let prev = null;
    
  while (slow_pointer) {
    temp = slow_pointer.next;
    slow_pointer.next = prev;
    prev = slow_pointer;
    slow_pointer = temp;
  }
    
  let left = head;
  let right = prev;
    
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
    
  return true;
    
};