// Given an array of N integers, write a program to implement the Insertion sorting algorithm.

const insertionSort = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let intermediate = arr[j];
        arr[j] = arr[j- 1];
        arr[j - 1] = intermediate;
      } else {
        break;
      }
    }
  }
  console.log(arr);
};

insertionSort([13, 46, 24, 52, 20, 9]);
insertionSort([ 9, 13, 20, 24, 46, 52 ]);
