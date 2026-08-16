class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = Array.from({ length: n }, () => []);

        for (let [u, v] of edges) {

            adj[u].push(v)
            adj[v].push(u)
        }

        const visited = new Array(n).fill(false);

        if (this.dfs(adj, visited, 0, -1)) {
            return false
        }

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                return false
            }
        }
        return true
    }

    dfs(adj, visited, u, parent) {
        visited[u] = true
        for (let v of adj[u]) {

            if (v === parent) {
                continue
            }

            if (visited[v]) {
                return true
            }

            if (this.dfs(adj, visited, v, u)) {
                return true
            }
        }

        return false
    }
}
