class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = [];
        let ans = []
        this.helper(1,n,k,res,ans);
        return ans
    }

    helper(start,n,k,res,ans){
        if(k == 0){
            ans.push([...res])
            return
        }
        if(start > n) return

        res.push(start)
        this.helper(start+1,n, k - 1, res,ans)

        res.pop()
        this.helper(start+1,n, k, res,ans)
    }
}
