// Q. Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.



var hasCycle = function(head) {
  let a = head;
  let b = head;
    
  while (b !== null && b.next !== null) {
    a = a.next
    b = b.next.next
    if (a === b) {
      return true
    }
  }
  return false
    
};



// const hasCycle = (head) => {
//     if (!head) return false
//     let slow = head,
//         fast = head.next

//     while (fast)  {
//         if (slow === fast) {
//             return true
//         }

//         slow = slow.next
//         fast = fast.next?.next
//     }

//     return false
// }

// var hasCycle = function(head) {
//   let currentNode = head;

//   while (!!currentNode?.next) {
//     if (currentNode.visited) {
//       return true;
//     }

//     currentNode.visited = true;
//     currentNode = currentNode.next;
//   }

//   return false;
// };