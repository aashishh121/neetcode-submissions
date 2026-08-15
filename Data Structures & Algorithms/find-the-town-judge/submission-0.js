class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let indegree = new Array(n+1).fill(0) // [0,0,0,3,0]
        let outdegree = new Array(n+1).fill(0) // [0,1,1,0, 1]

        for(let [u, v] of trust){
            outdegree[u]++
            indegree[v]++
        }

        for(let i in indegree){
            if(indegree[i]==n-1 && outdegree[i] == 0){
                return i
            }
        }
        return -1
    }
}
