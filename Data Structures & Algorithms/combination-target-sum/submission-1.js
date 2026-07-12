class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];
        let path = [];
        nums.sort((a, b) => a - b); 
        this.helper(0, nums, target,path, ans);
        return ans
    }

    helper(i, nums ,target,path, ans){
        // if(target < 0) return
        if(target == 0) {
            ans.push([...path])
            return
        }
        if(i >= nums.length) return
        if(nums[i] > target) return

        path.push(nums[i])
        this.helper(i, nums, target-nums[i], path, ans)

        path.pop()
        this.helper(i + 1, nums, target, path,ans)

    }
}
