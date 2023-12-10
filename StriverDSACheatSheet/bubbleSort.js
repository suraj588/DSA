// Given an array of N integers, write a program to implement the Bubble sorting algorithm.

const bubbleSort = (arr = []) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let intermediate = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = intermediate;
      }
    }
  }
  console.log(arr);
};

bubbleSort([13,46,9,24,24,52,20,9]);
