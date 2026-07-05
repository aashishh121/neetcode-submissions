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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length == 0) return null
        let i = 1
        const node = new ListNode();
        while (i < lists.length) {
            lists[i] = this.mergeTwoList(lists[i - 1], lists[i])
            i++
        }

        return lists[i - 1]
    }

    mergeTwoList(list1, list2) {
        const node = new ListNode();
        let pointer = node;

        let head1 = list1
        let head2 = list2

        while (head1 !== null && head2 !== null) {
            if (head1.val <= head2.val) {
                pointer.next = head1
                pointer = pointer.next
                head1 = head1.next
            } else {
                pointer.next = head2
                pointer = pointer.next
                head2 = head2.next

            }
        }

        while (head1 !== null) {
            pointer.next = head1
            pointer = pointer.next
            head1 = head1.next


        }

        while (head2 !== null) {
            pointer.next = head2
            pointer = pointer.next
            head2 = head2.next
        }

        return node.next

    }
}
