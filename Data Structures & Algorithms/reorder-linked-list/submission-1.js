/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let curr = head
        function reorder(head){
            if(!head) return
            reorder(head.next)
            let temp = curr.next
            if(curr.next == null) return 
            if(curr == head) {
                head.next = null
                return
            }
            curr.next = head
            head.next = head == temp ? null : temp
            curr = temp
        }

        reorder(head)
        
    }
}
