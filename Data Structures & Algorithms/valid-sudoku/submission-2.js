class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let row = {};
        let col = {};
        let sq = {};

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] == ".") continue
                let idx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (row[board[i][j]] == i || col[board[i][j]] == j) {
                    return false
                } else if (sq[board[i][j]] == idx) {
                    return false
                } else {
                    row[board[i][j]] = i
                    col[board[i][j]] = j
                    sq[board[i][j]] = idx
                }
            }
        }

        return true

    }
}
