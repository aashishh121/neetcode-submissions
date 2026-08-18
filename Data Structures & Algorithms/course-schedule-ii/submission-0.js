class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjlist = Array.from({ length: numCourses }, () => []);

        for (let [u, v] of prerequisites) {
            adjlist[v].push(u);
        }

        const indegree = new Array(numCourses).fill(0);
        const visited = new Array(numCourses).fill(false);

        for (let i = 0; i < numCourses; i++) {
            for (let v of adjlist[i]) {
                indegree[v]++
            }
        }

        const que = [];

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                que.push(i)
            }
        }

        let top = 0
        const res = []
        while (top < que.length) {
            const u = que[top];
            res.push(u)
            top++
            for (let v of adjlist[u]) {
                indegree[v]--
                if (indegree[v] == 0) {
                    que.push(v)
                }
            }
        }

        return res.length == numCourses ? res : []
    }
}
