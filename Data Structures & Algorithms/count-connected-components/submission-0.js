class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        const adjlist = Array.from({length : n}, ()=>[])
        for(let [u,v] of edges){
            adjlist[u].push(v)
            adjlist[v].push(u)
        }
        const visited = new Array(n).fill(false)
        let count = 0
        for(let i = 0 ; i < n; i++){
            if(!visited[i]){
                this.dfs(adjlist,i,visited);
                count++
            }
        }
        return count
    }

    dfs(adjlist,u,visited){
        visited[u] = true
        for(let v of adjlist[u]){
            if(!visited[v]){
                this.dfs(adjlist,v,visited);
            }
        }
    }
}
