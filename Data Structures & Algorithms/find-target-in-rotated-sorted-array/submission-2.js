class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let s = 0
        let e = nums.length - 1

        while(s <= e){
            const mid = Math.floor(s + (e-s)/2);

            if(nums[mid] == target){
                return mid
            }

            if(nums[s] <= nums[mid]){
                if(target < nums[mid] && target >= nums[s]){
                    e = mid - 1
                }else{
                    s = mid + 1
                }
            }else{
                if(target > nums[mid] && target <= nums[e]){
                    s = mid + 1
                }else{
                    e = mid - 1
                }
            }
        }

        return -1
    }
}
