class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        nums.sort((a, b) => a - b);

        let count = 1
        let n = nums.length

        const ans = []
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                count++
            } else {
                console.log(count)
                if (count > n / 3) {
                    ans.push(nums[i - 1])
                }
                count = 1

            }
        }

        if (count > n / 3) {
            ans.push(nums[n - 1])
        }


        return ans
    }
}
