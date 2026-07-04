class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const count = {};

        for(let char of s){
            count[char] = (count[char] || 0) + 1
        }

        let res = true
        for(let char of t){
            if(!count[char]){ // !0 0 treat as false , so it go inside this loop
                res =  false
            }
            count[char]--
        }
        return res
    }
}
