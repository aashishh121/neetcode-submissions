class MedianFinder {
    constructor() {
        this.maxPq = new MaxPriorityQueue()
        this.minPq = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        ;
        this.maxPq.enqueue(num);

        if (this.maxPq.size() > this.minPq.size()) {
            const popEl = this.maxPq.dequeue()
            this.minPq.enqueue(popEl)
        }

        if (this.minPq.size() > this.maxPq.size()) {
            const popEl = this.minPq.dequeue()
            this.maxPq.enqueue(popEl)
        }
    }

    /**
     * @return {number}
     */
    findMedian() {

        if (this.maxPq.size() > this.minPq.size()) {
            return this.maxPq.front()
        }

        return (this.maxPq.front() + this.minPq.front()) / 2

    }
}
