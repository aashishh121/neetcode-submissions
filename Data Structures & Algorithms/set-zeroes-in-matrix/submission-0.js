class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let col = new Array(matrix[0].length).fill(0)
        let row = new Array(matrix.length).fill(0)

        let m = matrix.length - 1
        let n = matrix[0].length - 1

        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                let val = matrix[i][j];
                if (val == 0) {
                    col[j] = 1
                    row[i] = 1
                }
            }
        }

        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                if (row[i] == 1) {
                    matrix[i][j] = 0
                }

                if (col[j] == 1) {
                    matrix[i][j] = 0
                }
            }
        }


    }
}
