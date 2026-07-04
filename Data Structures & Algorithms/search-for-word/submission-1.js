class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) { 
        let res = []
        for(let i = 0 ; i<board.length;i++){
            for(let j = 0 ; j<board[0].length;j++){
                if(board[i][j] == word[0]){
                    if(this.helper(board, word, i, j, 0)){
                        return true
                    }
                }
            }  
        }

      return false
        
    }

    helper(board, word, r, c, idx){

        
        if(r < 0 || 
        c < 0 || 
        r >= board.length || 
        c >= board[0].length || 
        board[r][c] != word[idx]){
            return  false
        }
        
        if(word.length - 1 == idx){
            return true
        }
        const temp = board[r][c]
        board[r][c] = "#"
        const isAvail = this.helper(board,word,r-1, c , idx + 1 ) ||
            this.helper(board,word,r, c-1, idx + 1)||
            this.helper(board,word,r+1, c , idx + 1)||
            this.helper(board,word,r, c + 1, idx + 1)

        board[r][c] = temp
        return isAvail
    }
}
