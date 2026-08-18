class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let r = heights.length
        let c = heights[0].length

        const pacific = Array.from({ length: r }, () => new Array(c).fill(false))
        const atlantic = Array.from({ length: r }, () => new Array(c).fill(false))

        for (let i = 0; i < c; i++) {
            this.dfsHelper(heights, 0, i, pacific)
        }

        for (let i = 0; i < r; i++) {
            this.dfsHelper(heights, i, 0, pacific)
        }

        for (let i = 0; i < c; i++) {
            this.dfsHelper(heights, r - 1, i, atlantic)
        }

        for (let i = 0; i < r; i++) {
            this.dfsHelper(heights, i, c - 1, atlantic)
        }

        const ans = [];

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    ans.push([i, j])
                }
            }
        }

        return ans
    }

    dfsHelper(heights, i, j, visited) {
        const r = heights.length;
        const c = heights[0].length;

        if (visited[i][j] || i < 0 || j < 0 || i >= r || j >= c) {
            return
        }

        visited[i][j] = true

        if (i + 1 < r && heights[i + 1][j] >= heights[i][j]) {
            this.dfsHelper(heights, i + 1, j, visited);
        }

        if (i - 1 >= 0 && heights[i - 1][j] >= heights[i][j]) {
            this.dfsHelper(heights, i - 1, j, visited);
        }

        if (j + 1 < c && heights[i][j + 1] >= heights[i][j]) {
            this.dfsHelper(heights, i, j + 1, visited);
        }

        if (j - 1 >= 0 && heights[i][j - 1] >= heights[i][j]) {
            this.dfsHelper(heights, i, j - 1, visited);
        }
    }


}
