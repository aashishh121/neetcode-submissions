class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const nums = numbers
        let i = 0
        let j = nums.length-1
        let ans = []
        while(i < j){
            const sum = nums[i] + nums[j];
            if(sum < target){
                i++
            }else if(sum > target){
                j--
            }else{
                ans.push(i+1, j+1)
                break
            }
        }
        return ans
    }
}
