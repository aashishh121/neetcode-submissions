class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let row = board.length;
        let col = board[0].length;
        for (let i = 0; i < col; i++) {
            if (board[0][i] == "O") {
                this.dfs(board, 0, i)
            }
        }

        for (let i = 1; i < row; i++) {
            if (board[i][0] == "O") {
                this.dfs(board, i, 0)
            }
        }

        for (let i = 1; i < col; i++) {
            if (board[row - 1][i] == "O") {
                this.dfs(board, row - 1, i)
            }
        }

        for (let i = 1; i < row; i++) {
            if (board[i][col - 1] == "O") {
                this.dfs(board, i, col - 1)
            }
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (board[i][j] == "O") {
                    board[i][j] = "X"
                } else if (board[i][j] === "#") {
                    board[i][j] = "O";
                }
            }
        }
    }

    dfs(board, i, j) {

        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] != "O") {
            return
        }
        board[i][j] = "#"
        this.dfs(board, i, j + 1)
        this.dfs(board, i, j - 1)
        this.dfs(board, i - 1, j)
        this.dfs(board, i + 1, j)
    }
}
