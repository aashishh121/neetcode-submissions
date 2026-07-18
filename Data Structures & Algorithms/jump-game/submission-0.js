class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        
        let maxIdx = 0;

        for(let i = 0 ; i<nums.length; i++){

            if(i > maxIdx) {
                return false
            }

            const dist = i + nums[i];
            if(dist > maxIdx){
                maxIdx = dist
            }
        }

        return true

    }
}
