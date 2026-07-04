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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return []
        const qu = [root];
        let top = 0
        const ans = [];
        while (top < qu.length) {
            const size = qu.length - top;
            const level = [];

            for (let i = 0; i < size; i++) {
                const node = qu[top++];

                level.push(node.val);

                if (node.left) qu.push(node.left);
                if (node.right) qu.push(node.right);
            }

            ans.push(level);
        }

        return ans
    }
}
