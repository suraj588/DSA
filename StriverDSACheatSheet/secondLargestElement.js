// Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

const getSecondLargestElement = (arr = []) => {
  let max = arr[0];
  let min = arr[0];
  let secondMax = arr[0];
  let secondMin = arr[0];

  arr.forEach(num => {
    if (num > max) {
      max = num;
    } else if (num < min) {
      min = num;
    }
  });

  let secondMaxDiff = max - arr[0];
  let secondMinDiff = arr[0] - min;

  arr.forEach(num => {
    if (num !== max && ((max - num) < secondMaxDiff)) {
      secondMaxDiff = max - num;
      secondMax = num;
    } else if (num !== min && ((num - min) < secondMinDiff)) {
      secondMinDiff = num - min;
      secondMin = num;
    }
  });
  return { max, secondMax, min, secondMin };
};

console.log(getSecondLargestElement([2, 5, 1, 3, 5, 7, 10]));
