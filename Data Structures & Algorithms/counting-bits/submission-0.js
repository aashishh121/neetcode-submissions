class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = [];
        let val = 0;
        while (val <= n) {
            let count = 0
            let temp = val
            while (temp > 0) {
                count += temp & 1
                temp = temp >> 1
            }
            res.push(count)
            val++
        }
        return res
    }
}
