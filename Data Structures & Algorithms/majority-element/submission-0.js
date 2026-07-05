class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = {}
        for(let i = 0; i<nums.length;i++){
            if(map[nums[i]]){
                map[nums[i]] += 1
            }else{
                map[nums[i]] = 1
            }
        }
      
        for(let x in map){
            if(map[x] > Math.floor(nums.length/2)){
               return x

            }
        }

       


    }

}
