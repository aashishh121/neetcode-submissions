class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //prefix * suffix

        let prefix = [];
        let suffix = [];
        let prefpro = 1
        let suffpro = 1
        for(let i =0; i<nums.length;i++){
            if(i==0){
                prefix[i] = prefpro
            }else{
                prefpro = prefpro * nums[i-1]
                prefix[i] = prefpro
            }
        }

        for(let i = nums.length-1; i>=0;i--){
            if(i==nums.length-1){
                suffix[i] = suffpro
            }else{
                suffpro = suffpro * nums[i+1]
                suffix[i] = suffpro
            }
        }

        const ans = []

        for(let i =0; i<nums.length;i++){
            ans[i] = prefix[i] * suffix[i]
        }
        return ans


    }
}
