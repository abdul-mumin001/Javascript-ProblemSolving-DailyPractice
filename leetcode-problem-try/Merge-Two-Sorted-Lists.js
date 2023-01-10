// Q. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]



var mergeTwoLists = function(list1, list2) {
        if (list1 == null) return list2;
        if (list2 == null) return list1;
        // If list1 is lower
        if (list1.val < list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        }
        // If list2 is lower
        else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }  
    };
    
    

    var mergeTwoList = function (list1, list2) {
        let head = new ListNode()
    
        let lastNode = head
    
        while (list1 && list2) {
            if (list2.val > list1.val) {
                lastNode.next = list1
                list1 = list1.next
            } else {
                lastNode.next = list2
                list2 = list2.next
            }
            lastNode = lastNode.next
        }
    
        lastNode.next = list1?.val !== undefined ? list1 : list2
    
        return head.next
    };