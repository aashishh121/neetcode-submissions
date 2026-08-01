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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length == 0) return 0

        const events = [];

        for(let i=0; i<intervals.length;i++){
            events.push([intervals[i].start, 1])
            events.push([intervals[i].end, -1])
        }
        events.sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
        });

        
        let room = 0
        let max = -Infinity
        for(let [time, delta] of events){
            room += delta
            max = Math.max(max, room)
        }

        return max
    }
}
