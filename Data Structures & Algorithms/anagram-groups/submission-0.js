class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const count = {};
        for(let val of strs){
            const freq = new Array(26).fill(0);
           for (let char of val){
                const idx = char.charCodeAt(0) - 97 // small 'a' start with 97 unicode
                freq[idx] += 1
           } 
            const str = freq.join("#")
           if(count[str] != undefined){
                count[str].push(val)
           }else{
            count[str] = [val]
           }
        }

       return Object.values(count)
    }
}
