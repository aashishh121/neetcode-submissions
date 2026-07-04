class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let pointer1 = 0
        let pointer2 = 1

        let buyPrice = prices[pointer1];
        let maxProfit = 0

        while(pointer2 < prices.length){
            let sellPrice = prices[pointer2];
            if(sellPrice < buyPrice){
                buyPrice = sellPrice
                pointer1 = pointer2
                pointer2++
            }else{
                let profit = sellPrice - buyPrice
                if(profit > maxProfit){
                    maxProfit = profit
                }
                    pointer2++
            }

        }
        return maxProfit
    }
}
