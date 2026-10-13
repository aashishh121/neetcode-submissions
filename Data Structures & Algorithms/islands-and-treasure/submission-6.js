class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        if (rows === 0) return grid;
        const cols = grid[0].length;

        let queue = [];
        let top = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    queue.push({ xi: r, xj: c })

                }
            }
        }

        let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]

        while (queue.length > top) {
            let popEl = queue[top++];
            const { xi, xj } = popEl;

            for (let [i, j] of dirs) {
                let ni = xi + i
                let nj = xj + j

                if (
                    ni < 0 || nj < 0 ||
                    ni >= rows || nj >= cols ||
                    grid[ni][nj] !== 2147483647
                ) {
                    continue
                }
                grid[ni][nj] = grid[xi][xj] + 1
                queue.push({ xi: ni, xj: nj })
            }

        }

        return grid
    }

}