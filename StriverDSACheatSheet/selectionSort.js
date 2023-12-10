// Given an array of N integers, write a program to implement the Selection Sorting algorithm.

const selectionSort = (arr = []) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let max = arr[0];
    let maxIndex = 0;
    for (let j = 0; j <= arr.length - 1 - i; j++) {
      if (arr[j] > max) {
        max = arr[j];
        maxIndex = j;
      }
    }
    let intermediate = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[maxIndex];
    arr[maxIndex] = intermediate;
  };
};

selectionSort([
  13,46,24,52,24,20,9
]);
