class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let idx = 0;
        for (let i = 0; i < nums.length; i++) {
            if (val == nums[i]) {
                continue;
            } else {
                nums[idx] = nums[i];
                idx++;
            }
        }
        return idx;
    }
}
