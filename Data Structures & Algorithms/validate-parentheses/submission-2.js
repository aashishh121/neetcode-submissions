class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let top = -1
        let stack = [];
        let ans = true
        for(let char of s){
            if(char == '(' || char == '[' || char == '{'){
                top++
                stack[top] = char
            }else{
                if(char == ')' && stack[top] == '('){
                    top--
                }else if(char == ']' && stack[top] == '['){
                    top--
                }else if(char == '}' && stack[top] == '{'){
                    top--
                }else{
                    ans = false
                }
            }
        }

        if(top > -1) { ans = false}
        return ans
    }
}
