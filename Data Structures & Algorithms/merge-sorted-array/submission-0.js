class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i = 0
        let j = 0
        const arr = [];
        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                arr.push(nums1[i])
                i++
            } else {
                arr.push(nums2[j]);
                j++
            }
        }
        while (i < m) {
            arr.push(nums1[i])
            i++
        }
        while (j < n) {
            arr.push(nums2[j]);
            j++
        }

        arr.forEach((val, idx)=>{
            nums1[idx] = val
        })
    }
}
