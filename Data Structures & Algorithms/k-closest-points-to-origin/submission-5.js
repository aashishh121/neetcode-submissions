class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {

        const maxPq = new MaxPriorityQueue((bid) => bid.value);

        for (let i = 0; i < points.length; i++) {
            maxPq.enqueue({ idx: i, value:( (points[i][0] ** 2) + (points[i][1] ** 2)) ** 0.5 })

            if (maxPq.size() > k) {
                maxPq.dequeue()
            }
        }

        const ans = [];

        while (!maxPq.isEmpty()) {
            ans.push(points[maxPq.dequeue().idx]);
        }

        return ans;


    }
}
