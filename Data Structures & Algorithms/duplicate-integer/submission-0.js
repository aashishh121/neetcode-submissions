class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {};
        let res = false
        for(let i =0; i< nums.length; i++){
            if(hash[nums[i]]){
                res = true
                break
            }else{
                hash[nums[i]] = 1
            }
        }

        return res
    }
}
