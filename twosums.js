var twoSum = function(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (diff in hash) {
      return [i, hash[diff]]
    } else {
      hash[nums[i]] = i
    }
  }
  return false
};

console.log(twoSum([2,7,11,15], 9))