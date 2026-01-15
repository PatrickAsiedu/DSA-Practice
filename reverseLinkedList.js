/**Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both? */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//reversing a linked list is basically letting everyother element(next element) take a turn at becoming the head, while the head becomes tail
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while (curr !== null) {
        // Save next node before we overwrite it
        let nextTemp = curr.next;
        
        // Reverse the pointer
        curr.next = prev;
        
        // Move forward
        prev = curr;
        curr = nextTemp;
    }
    
    return prev

};



