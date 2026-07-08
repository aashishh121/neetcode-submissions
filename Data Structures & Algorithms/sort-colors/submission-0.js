class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let zero = 0;
        let one = 0;
        let two = 0

        nums.forEach((num)=>{
            if(num==0) zero++
            if(num==1) one++
            if(num==2) two++
        })

        for(let i = 0 ; i<nums.length;i++){
            if(zero > 0){
                nums[i] = 0
                zero--
            }else if(one > 0){
                nums[i] = 1
                one--
            }else{
                nums[i] = 2
                two--
            }
        }


    }
}
