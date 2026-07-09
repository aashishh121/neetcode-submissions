

class MinHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        if (this.heap.length == 0) return
        return this.heap[0]
    }

    getParentIdx(idx) {
        return Math.floor(idx / 2)
    }

    left(i) {
        return 2 * i
    }

    right(i) {
        return 2 * i + 1
    }

    add(num) {
        if (this.heap.length == 0) {
            this.heap.push(num);
        } else {
            this.heap.push(num);
            this.heapUp(this.heap.length)
        }
    }

    heapUp(idx) {
        if (idx <= 1) return
        let parentidx = this.getParentIdx(idx)
        if (this.heap[parentidx - 1] > this.heap[idx - 1]) {
            this.swap(parentidx - 1, idx - 1)
            this.heapUp(parentidx)
        }
    }

    remove() {
        if (this.heap.length == 0) return
        if (this.heap.length == 1) {
            return this.heap.pop();

        }

        const min = this.heap[0];

        // Move last element to root
        this.heap[0] = this.heap.pop();

        this.heapDown(1)

        return min
    }

    heapDown(idx) {

        let leftidx = this.left(idx)
        let rightidx = this.right(idx)
        let smallest = idx

        if (leftidx <= this.heap.length && this.heap[leftidx - 1] < this.heap[smallest - 1]) {
            smallest = leftidx
        }

        if (rightidx <= this.heap.length && this.heap[rightidx - 1] < this.heap[smallest - 1]) {
            smallest = rightidx
        }

        if (smallest !== idx) {
            this.swap(smallest - 1, idx - 1);
            this.heapDown(smallest)
        }

    }

    size() {
        return this.heap.length
    }

    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.minHeap = new MinHeap()
        for (let i = 0; i < nums.length; i++) {
            this.add(nums[i])
        }
    }


    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {

        this.minHeap.add(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.remove()
        }

        return this.minHeap.peek()


    }
}
