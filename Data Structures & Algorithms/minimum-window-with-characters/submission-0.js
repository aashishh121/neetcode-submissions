class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        const freqOft = {};

        for (let i = 0; i < t.length; i++) {
            if (freqOft[t[i]]) {
                freqOft[t[i]] += 1
            } else {
                freqOft[t[i]] = 1
            }
        }

        let left = 0;
        let count = 0;
        let len = Infinity
        let i = 0
        let j = 0
        for (let right = 0; right < s.length; right++) {
            if (freqOft[s[right]] !== undefined) {

                if (freqOft[s[right]] > 0) {
                    count++;
                }

                freqOft[s[right]]--;
            }

            while (count == t.length) {
                // len = Math.max(len, right - left + 1)
                if ((right - left + 1) < len) {
                    len = right - left + 1
                    i = left

                }

                if (freqOft[s[left]] !== undefined) {
                    freqOft[s[left]] += 1
                    if (freqOft[s[left]] > 0) {
                        count--;
                    }
                }
                left++
            }
        }

        return len == Infinity ? "" : s.substring(i, i+len)




    }
}
