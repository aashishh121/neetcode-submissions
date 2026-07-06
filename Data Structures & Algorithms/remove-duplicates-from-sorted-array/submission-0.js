class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 0
        let j = i + 1
        let k = i + 1

        while (j < nums.length) {
            if (nums[j] == nums[i]) {
                j++
            } else {
                nums[k] = nums[j]
                i = j
                k++
                j++
            }
        }

        return k


    }
}
