class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let max = Number.MIN_SAFE_INTEGER
        let i = 0 
        let j = heights.length-1

        while(i <= j){

            if(heights[i] < heights[j]){
                let water = heights[i] * (j-i)
                max = Math.max(max, water)
                i++
            }else{
                let water = heights[j] * (j-i)
                max = Math.max(max, water)
                j--
            }
        }

        return max
    }
}
