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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head1 = list1;
        let head2 = list2;

        let newNode = new ListNode(0, null);
        let nodePointer = newNode

        while (head1 !== null && head2 !== null) {
            if (head1.val <= head2.val) {
                nodePointer.next = head1
                head1 = head1.next
            } else {
                nodePointer.next = head2
                head2 = head2.next
            }

            nodePointer = nodePointer.next

        }

        while (head1 !== null) {
            nodePointer.next = head1
            head1 = head1.next
            nodePointer = nodePointer.next
        }

        while (head2 !== null) {
            nodePointer.next = head2
            head2 = head2.next
            nodePointer = nodePointer.next
        }

        return newNode.next

    }
}
