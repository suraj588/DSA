// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Solution-1
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      continue;
    }
    let flag = false;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        flag = true;
        obj[nums[i]] = true;
        break;
      }
    }
    if (!flag) {
      return nums[i];
    }
  }
};


// Solution-2
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
    if (obj[nums[i]] > 1) {
      delete obj[nums[i]];
    }
  }
  // Can also do return Object.keys(obj)[0];
  for (key in obj) {
    return key;
  }
};
