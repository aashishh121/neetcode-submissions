class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       if(s.length==0) return 0
        let i = 0
        let max = 0
        let set = new Set();
        for(let j = 0 ; j<s.length;j++){
            let char = s[j]
            while(set.has(char)){
                set.delete(s[i]);
                i++
            }

            set.add(char)
            max = Math.max(max, j-i+1)
        }

        return max

    }
}
