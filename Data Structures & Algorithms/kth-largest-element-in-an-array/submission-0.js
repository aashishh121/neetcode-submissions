class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minPq = new MinPriorityQueue();

        nums.forEach((num)=>{
            minPq.enqueue(num)
            if(minPq.size() > k){
                minPq.dequeue()
            }
        })

        return minPq.front()
    }
}
