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
     * @return {boolean}
     */
    hasCycle(head) {
        const map = new Map();
        let ans = false
        while(head !== null){
            if(map.has(head)){
                ans = true
                break
            }else{
                map.set(head, true)
            } 

            head = head.next
        }
        return ans
    }
}
