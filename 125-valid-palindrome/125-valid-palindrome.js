/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let trimmed = s.replace(/\s/g, '')
    .replace(/[^\w]|_/g, '')
  let reversedTrim = s.replace(/\s/g, '')
    .replace(/[^\w]|_/g, '')
    .split('')
    .reverse()
    .join('');
    console.log(trimmed.toLowerCase(), reversedTrim.toLowerCase());
  return (trimmed.toLowerCase() === reversedTrim.toLowerCase())
};