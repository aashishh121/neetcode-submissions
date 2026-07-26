class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let n = nums.length
        const map = new Map();
        nums.forEach((num) => {
            if (map.has(num)) {
                map.set(num , map.get(num) + 1)
            }
            else {
                map.set(num, 1)
            }
        })

        const ans = [];

        for(let [key,value] of map){

            if(value > n/3 ){
                ans.push(key)
            }
        }

        return ans
    }
}
