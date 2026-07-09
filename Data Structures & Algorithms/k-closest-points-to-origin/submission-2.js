class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxPq = new MaxPriorityQueue(
            (item) => item.dist
        );

        for (let i = 0; i < points.length; i++) {
            const dist = points[i][0] * points[i][0] + points[i][1] * points[i][1];

            maxPq.enqueue({ idx: i, dist });

            if (maxPq.size() > k) {
                maxPq.dequeue();
            }
        }

        const ans = [];

        while (!maxPq.isEmpty()) {
            ans.push(points[maxPq.dequeue().idx]);
        }

        return ans;
    }
}