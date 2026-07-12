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

        const pq = new MaxPriorityQueue((item) => item.count)

        for (let i = 0; i < freq.length; i++) {
            if (freq[i] > 0) {
                let ch = i + 'A'.charCodeAt(0)
                pq.enqueue({ count: freq[i], char: String.fromCharCode(ch) })
            }
        }

        //[x-2,y-2]
        let ans = []
        while (!pq.isEmpty()) {
            let vector = [];
            for (let i = 0; i < n + 1; i++) {
                if (!pq.isEmpty()) {
                    let pop = pq.dequeue()
                    pop.count = pop.count - 1
                    vector.push(pop)
                }
            }

            for (let i = 0; i < vector.length; i++) {
                if (vector[i] !== null && vector[i].count > 0) {
                    pq.enqueue(vector[i])
                }
            }

            if (pq.isEmpty()) {
                for (let i = 0; i < vector.length; i++) {

                    ans.push(vector[i].char)
                }
            } else {
                for (let i = 0; i < n + 1; i++) {
                    if (i >= vector.length) {
                        ans.push('idle')
                    } else {
                        ans.push(vector[i].char)
                    }

                }
            }


        }

        return ans.length
    }
}