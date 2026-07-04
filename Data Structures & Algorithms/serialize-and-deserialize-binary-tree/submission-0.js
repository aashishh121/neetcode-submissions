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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const ans = [];
        this.serializeHelper(root,ans);
        return JSON.stringify(ans)
    }

    serializeHelper(root, ans) {
        if (!root) {
            ans.push(null);
            return
        }
        ans.push(root.val)
        this.serializeHelper(root.left, ans)
        this.serializeHelper(root.right, ans)
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const arr = JSON.parse(data);
        let idx = 0
        function build() {
            if(idx >= arr.length || arr[idx] == null) {
                idx++
                return null
            }
            const node = new TreeNode(arr[idx]);
            idx++
            node.left = build();
            node.right = build();

            return node
        }

        return build()
    }
}
