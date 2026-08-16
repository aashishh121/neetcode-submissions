class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjlist = Array.from({ length: numCourses }, () => [])

        for (let [u, v] of prerequisites) {
            adjlist[v].push(u)
        }
        const visited = new Array(numCourses).fill(false)
        const inRecursion = new Array(numCourses).fill(false)

        for (let i = 0; i < numCourses; i++) {
            if (!visited[i] && this.dfs(adjlist, i, visited, inRecursion)) {
                return false
            }
        }

        return true
    }

    dfs(adjlist, u, visited, inRecursion) {
        visited[u] = true
        inRecursion[u] = true
        for (let v of adjlist[u]) {
            if (!visited[v] && this.dfs(adjlist, v, visited, inRecursion)) {
                return true
            } else if (inRecursion[v]) {
                return true
            }
        }
        inRecursion[u] = false
        return false
    }
}
