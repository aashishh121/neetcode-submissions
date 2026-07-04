class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {};
        let res = [] ;
        for(let i = 0; i<nums.length;i++){
            const diff = target - nums[i];
            if(hash[diff] != undefined){
                res[0] = hash[diff]
                res[1] = i
            }else{
                hash[nums[i]] = i
            }
        }
        return res
    }
}
