class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length
        k = k % n
        this.reverse(0,n-1,nums)
        this.reverse(0,k-1,nums)
        this.reverse(k,n-1,nums)
    }

    reverse(i,j,nums){
        while(i < j){
            let temp = nums[i]
            nums[i] = nums[j];
            nums[j] = temp

            i++
            j--
        }
    }
}
