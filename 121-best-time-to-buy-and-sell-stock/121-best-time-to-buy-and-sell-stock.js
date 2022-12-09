/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 1) {
    return 0;
  }

  let l = 0;
  let r = 1;
  let max = 0;
  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      let diff = prices[r] - prices[l]
      if (diff > max) {
        max = diff
      }
      r++
    } else {
      l = r
      r++
    }
  }
  return max
};