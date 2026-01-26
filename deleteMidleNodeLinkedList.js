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
var deleteMiddle = function(head) {
    let current = head
    let size = 0
    while(current){
        size +=1
        current = current.next
    }

    if(size ===1){
        return null
    }

    let prev=null
    let current2 = head
    let index = 0
    while(current2){
        if(index === Math.floor(size/2) ){ 
            prev.next = current2.next
        }
        index+=1
        prev=current2
        current2=current2.next

        
        
    }

    return head


    

    
}