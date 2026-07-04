/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {

        let max = -Infinity
        function helper(root) {
            if (!root) return 0
            const le = helper(root.left);
            const ri = helper(root.right);
            const m1 = le + ri + root.val
            const m2 = Math.max(le, ri) + root.val
            const m3 = root.val
            max = Math.max(max, m1, m2, m3)
            return Math.max(m2, m3)
        }

        helper(root);
        return max
    }
}
