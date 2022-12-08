/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (['(', '{', '['].includes(s[i])) {
      stack.push(s[i])
    } else if (s[i] === ')') {
      let popped = stack.pop()
      if (popped === '(') {
        continue
      } else {
        return false;
      }
    } else if (s[i] === '}') {
      let popped = stack.pop()
      if (popped === '{') {
        continue
      } else {
        return false;
      }
    } else if (s[i] === ']') {
      let popped = stack.pop()
      if (popped === '[') {
        continue
      } else {
        return false;
      }
    }
  }
   if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

const Stack = function() {
  this.length = 0
}

Stack.prototype.push = function(val) {
  this[this.length] = val
  this.length++
}

Stack.prototype.pop = function() {
  if (this.length > 0) {
    let result = this[this.length - 1]
    delete this[this.length - 1]
    this.length--
    return result;
  } else {
    return false;
  }
}