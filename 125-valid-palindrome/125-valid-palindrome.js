/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let trimmed = s.replace(/[^\w]|_|\s/g, '').toLowerCase()
  let l = 0;
  let r = trimmed.length - 1;
  while (l < r) {
    if (trimmed[l] !== trimmed[r]) {
      return false
    }
    l++
    r--
  }
  return true
};