class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // we use bucket sort to find out most frequent elements from object 'count'
    topKFrequent(nums, k) {
        const count = {};
        for(let val of nums){
            count[val] = (count[val] || 0) + 1
        }

        const arr = new Array(nums.length).fill(null)

        for(let key in count){
            const idx = count[key];
            if(arr[idx] != null){
                arr[idx].push(key)
            }else{
                arr[idx] = [key]
            }
        }
        const ans = []
        for(let i = arr.length-1; i>=0;i--){
            if(ans.length < k && arr[i] != null){
                ans.push(...arr[i])
            }
        }
        return ans


    }
}
