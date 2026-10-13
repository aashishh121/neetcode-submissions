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
        let fresh = 0
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (grid[i][j] == 1) {
                    fresh++
                }
                if (grid[i][j] == 2) {
                    queue.push([i, j])
                }
            }
        }

        if (fresh === 0) return 0;
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        let minute = 0
        while (queue.length > top && fresh > 0) {
            let size = queue.length - top
            for (let k = 0; k < size; k++) { // this is only for queue size because in reality we do not pop element from queue in javascript , we just mimic as it is queue
                let popEl = queue[top++];
                const i = popEl[0]
                const j = popEl[1]


                for (let [x, y] of dirs) {
                    let ni = i + x
                    let nj = j + y

                    if (ni < 0 || nj < 0 || ni >= r || nj >= c
                        || grid[ni][nj] !== 1) {
                        continue
                    }

                    grid[ni][nj] = 2;
                    fresh--
                    queue.push([ni, nj])

                }
            }
            minute++
        }
        if (fresh > 0) return -1
        return minute

    }
}
