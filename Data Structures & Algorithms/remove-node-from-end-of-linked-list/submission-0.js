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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len = 0
        let pointer = head;
        while (pointer !== null) {
            pointer = pointer.next
            len++
        }
        if(len == n){
            return head.next
        }

        let removeIdx = len - n
        let i = 0
        let pointer2 = head
        while(i < removeIdx ){
            if(i==removeIdx-1){
                pointer2.next = pointer2.next.next
            }else{
                 pointer2 = pointer2.next
            }
           
            i++
        }
        return head
    }
}
