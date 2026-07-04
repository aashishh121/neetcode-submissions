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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let prev = null
        function inorder(root,k){
            if(!root) return null
            if(prev !== null) return 
            inorder(root.left,k)
            count++
            if(count == k){
                prev = root.val
            }
            inorder(root.right,k)
        }

        inorder(root,k)

        return prev
    }
}
