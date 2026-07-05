class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length * 2)
        for(let i = 0 ; i < nums.length; i++){
            let calIdx = i + nums.length
            ans[i] = nums[i]
            ans[calIdx] = nums[i]
        }

        return ans
    }
}
