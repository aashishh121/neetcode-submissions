/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a,b)=>a.start-b.start)
        let ans = true;
        for (let i = 0; i < intervals.length; i++) {
            let interval = intervals[i]
            for (let j = i + 1; j < intervals.length; j++) {
                if (intervals[j].start < interval.end) {
                    ans = false
                    break
                }
            }

            if (ans == false) {
                break
            }
        }

        return ans
    }
}
