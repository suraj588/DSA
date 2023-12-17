
// Good in terms of memory but not run time. (BruteForce)
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let prevNum = nums[0];
  let startIndex = 1;
  while(startIndex < nums.length) {
    const currentNum = nums[startIndex];
    if (prevNum === currentNum) {
      let intermediateIndex = startIndex;
      while(intermediateIndex < nums.length) {
        nums[intermediateIndex] = nums[intermediateIndex + 1];
        if (typeof nums[intermediateIndex] === 'undefined') {
          indexForNull = intermediateIndex;
        }
        intermediateIndex++;
      }
    } 
    else if (typeof nums[startIndex] === 'undefined') {
      nums.length = nums.length - 1;
    } else {
      prevNum = nums[startIndex];
      startIndex++;
    }
  }
  return nums.length;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
removeDuplicates([-1,0,0,0,0,3,3]);

// Assign prev = nums[0]
// Assign uniqueNumIndex = 1 (as i starts from 1)
// Start loop from i = 1
// Compare prev to currentNum (nums[i])
// if nums[i] !== prev
  // nums[uniqueNumIndex] = nums[i]
  // so the number is unique in unique position. So, the nextunique position = uniqueNumIndex++
  // prev = nums[i]
// else 

const removeDuplicates1 = (nums = []) => {
  let prev = nums[0];
  let uniqueNumIndex = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== prev) {
      nums[uniqueNumIndex] = nums[i];
      prev = nums[i];
      uniqueNumIndex++;
    }
  }
  // removes the non-uniques which will always be present at the end now.
  nums.length = uniqueNumIndex;
  return nums.length;
};
removeDuplicates1([0,0,1,1,1,2,2,3,3,4]);
removeDuplicates1([-1,0,0,0,0,3,3]);
