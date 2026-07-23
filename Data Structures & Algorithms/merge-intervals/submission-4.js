class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length <= 1) return intervals
        intervals.sort((a, b) => a[0] - b[0]);
        const ans = []

        let current = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] <= current[1]) {
                // Merge
                current[1] = Math.max(current[1], intervals[i][1]);
            } else {
                ans.push(current);
                current = intervals[i];
            }
        }

        ans.push(current);

        return ans
    }
}
