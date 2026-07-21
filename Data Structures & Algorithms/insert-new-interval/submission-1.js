class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {

        let i = 0;
        const ans = []
        while (i < intervals.length && newInterval[0] > intervals[i][1]) {
            ans.push(intervals[i])
            i++
        }

        let min = newInterval[0]
        let max = newInterval[1]
        while (i < intervals.length && newInterval[0] <= intervals[i][1]
        && newInterval[1] >= intervals[i][0]
        ) {
            min = Math.min(min, intervals[i][0], newInterval[0])
            max = Math.max(max, intervals[i][1], newInterval[1])
            i++
        }
        ans.push([min, max])

        while (i < intervals.length) {
            ans.push(intervals[i])
            i++
        }

        return ans
    }
}
