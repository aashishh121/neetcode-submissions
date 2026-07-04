class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let i = 0
        let j = str.length - 1
        let res = true
        while(i < j){
            if(str[i] !== str[j]){
                return false
            }
            i++
            j--

        }

        return true
    }
}
