class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Array(26).fill(0);

        for (const task of tasks) {
            freq[task.charCodeAt(0) - 65]++;
        }

        let maxFreq = Math.max(...freq);

        let countMax = 0;
        for (const f of freq) {
            if (f === maxFreq) countMax++;
        }

        return Math.max(
            tasks.length,
            (maxFreq - 1) * (n + 1) + countMax
        );
    }
}