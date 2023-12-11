// Given an array, we have to find the largest element in the array.

const getLargestElementInArray = (arr = []) => {
  let max = arr[0];
  arr.forEach(num => {
    if (num > max) {
      max = num;
    }
  });
  return max;
};

console.log(getLargestElementInArray([2, 5, 1, 3, 0]));
