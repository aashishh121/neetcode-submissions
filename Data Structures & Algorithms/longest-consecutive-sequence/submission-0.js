class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // we use set data structutre

        const set = new Set();

        for(let val of nums){
            set.add(val)
        }

        let maxLen = 0
        for (let val of set){
            
            if(set.has(val-1)){
                continue
            }else{
                let currVal = val
                let len = 1
                while(set.has(currVal+1)){
                   len++
                   currVal = currVal+1
                }

                if(len > maxLen){
                    maxLen = len
                }
            }
        }

        return maxLen


    }
}
