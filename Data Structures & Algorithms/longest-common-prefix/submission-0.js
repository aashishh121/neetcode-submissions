class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let str = ""
        let string = strs[0];
        for(let i = 0; i<string.length;i++){
            let char = string[i];
            let isChar = true
            for(let j = 1; j<strs.length;j++){
                if(strs[j][i] != char){
                    isChar = false
                }
            }

            if(isChar) {
                str += char
            }else{
                break
            }
        }

        return str
    }
}
