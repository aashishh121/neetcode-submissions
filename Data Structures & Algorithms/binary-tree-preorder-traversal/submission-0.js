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
     * @return {number[]}
     */
    preorderTraversal(root) {
        const ans = []
        this.helper(root, ans)
        return ans
    }

    helper(root, ans) {
        if (!root) return null
        ans.push(root.val)
        this.helper(root.left, ans)
        this.helper(root.right, ans)
    }
}
