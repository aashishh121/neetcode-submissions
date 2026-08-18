class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == "1") {
                    max = Math.max(max, this.dfs(grid, i, j, 1))
                }
            }
        }
        return max
    }

    dfs(grid, i, j, c) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length
            || grid[i][j] != "1") return 0


        grid[i][j] = "#";

        return 1 + this.dfs(grid, i, j + 1) +
            this.dfs(grid, i, j - 1, c + 1) +
            this.dfs(grid, i - 1, j, c + 1) +
            this.dfs(grid, i + 1, j, c + 1) 


    }
}
