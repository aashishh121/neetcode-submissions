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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
           //time complexity o(n^2)
     if(preorder.length == 0 ) return null
    const node = new TreeNode(preorder[0])
    const idx =  inorder.indexOf(preorder[0]);
    const newLeftInorder = inorder.slice(0,idx)
    const newRightInorder = inorder.slice(idx+1);
    const leftPreorder = preorder.slice(1, 1 + newLeftInorder.length);
    const rightPreorder = preorder.slice(1 + newLeftInorder.length);
    node.left = this.buildTree(leftPreorder,newLeftInorder)
    node.right = this.buildTree(rightPreorder,newRightInorder)
    return node
    }
}
