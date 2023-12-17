/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (nums.length === 1 || k === 0 || nums.length === k) {
      return nums;
  }
  let start = k % nums.length;
  start = nums.length - start;
  if (start < 0) {
      start = start - nums.length;
  }
  const firstArray = [];
  for (let i = start; i < nums.length; i++) {
      firstArray.push(nums[i]);
  }
  for (let i = 0; i < start; i++) {
      firstArray.push(nums[i]);
  }
  for (let i = 0; i < firstArray.length; i++) {
      nums[i] = firstArray[i];
  }
  return nums;
};

console.log(rotate([1,2,3,4,5,6,7,8,9,10,11,12,13], 17));
