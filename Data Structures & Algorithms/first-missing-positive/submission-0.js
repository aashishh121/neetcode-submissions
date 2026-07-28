class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let small = 1
        let map = {};
        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]]) {
                map[nums[i]] += 1
            } else {
                map[nums[i]] = 1
            }
        }

        while (map[small]) {
            small++
        }

        return small

    }
}
