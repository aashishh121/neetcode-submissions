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
     * @return {boolean}
     */
    isValidBST(root) {
        let prev = null
        let isBST = true
        function inorder(root) {
            if (!root) return null
            if(!isBST) return false
            inorder(root.left);
            if (prev !== null && root.val <= prev){
                isBST = false
            }
            prev = root.val
            inorder(root.right)
        }

        inorder(root)
        return isBST

    }
}
