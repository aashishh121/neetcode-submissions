class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const r = grid.length
        const c = grid[0].length

        const queue = [];
        let top = 0

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] == 0) {
                    grid[i][j] = Infinity
                }

                if (grid[i][j] == 1) {
                    grid[i][j] = -1
                }


                if (grid[i][j] == 2) {
                    grid[i][j] = 0
                    queue.push([i, j])
                }
            }
        }

        while (queue.length > top) {
            let popEl = queue[top++];
            const i = popEl[0]
            const j = popEl[1]

            const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (let [x, y] of dirs) {
                let ni = i + x
                let nj = j + y

                if (ni < 0 || nj < 0 || ni >= r || nj >= c
                    || grid[ni][nj] !== -1) {
                    continue
                }

                grid[ni][nj] = grid[i][j] + 1
                queue.push([ni, nj])

            }
        }

        let res = 0
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] === -1) return -1;

                if (grid[i][j] !== Infinity) {
                    res = Math.max(res, grid[i][j]);
                }
            }
        }

        return res


    }


}
