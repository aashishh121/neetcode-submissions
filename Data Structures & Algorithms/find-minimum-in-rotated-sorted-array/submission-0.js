class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        return this.helper(nums, 0, nums.length-1);
    }

    helper(nums, s, e){

        if(s === e){
            return nums[s]
        }
        const mid = Math.floor(s + (e-s)/2);

        if(nums[e] < nums[mid] ){
            return this.helper(nums, mid+1, e);
        }else{
            return this.helper(nums,s,mid);
        }
        
    }
}
