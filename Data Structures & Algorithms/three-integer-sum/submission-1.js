class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const ans = []
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue
            }
            let j = i + 1
            let k = nums.length - 1

            while (j < k) {
                let triplet = nums[i] + nums[j] + nums[k];
                if (triplet < 0) {
                    j++
                }
                else if (triplet > 0) {
                    k--
                } else {
                    ans.push([nums[i], nums[j], nums[k]])
                    j++
                    k--

                    while (j < k && nums[j - 1] == nums[j]) {
                        j++
                    }
                    while (j < k && nums[k] == nums[k + 1]) {
                        k--
                    }
                }



            }

        }
        return ans
    }


}
