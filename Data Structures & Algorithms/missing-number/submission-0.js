class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xor1 = 0 
        for(let i = 1 ; i <= nums.length ; i++){
            xor1 ^= i
        }

        let xor2 = 0 
        for(let i = 0 ; i < nums.length ; i++){
            xor2 ^= nums[i]
        }

        return xor1 ^ xor2
    }
}
