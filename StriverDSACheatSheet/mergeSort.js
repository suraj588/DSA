// Given an array of size n, sort the array using Merge Sort.

// Merge Sort is a divide and conquers algorithm, it divides the given array into equal parts and then merges the 2 sorted parts. 
// There are 2 main functions :
// merge(): This function is used to merge the 2 halves of the array. It assumes that both parts of the array are sorted and merges both of them.
// mergeSort(): This function divides the array into 2 parts. low to mid and mid+1 to high.
// We recursively split the array, and go from top-down until all sub-arrays size becomes 1.

[9, 15, 20]
[2, 6, 6, 10, 11, 16, 19, 30, 35]

// merges 2 sorted arrays
const merge = (arr1 = [], arr2 = []) => {
  const mergedSortedArr = [];
  let arr2Pointer = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2[arr2Pointer]) {
      for (let j = i; j < arr1.length; j++) {
        mergedSortedArr.push(arr1[j]);
      }
      break;
    }
    if (arr1[i] < arr2[arr2Pointer]) {
      mergedSortedArr.push(arr1[i]);
    } else if (arr1[i] > arr2[arr2Pointer]) {
      mergedSortedArr.push(arr2[arr2Pointer++]);
      while (arr2[arr2Pointer] <= arr1[i]) {
        mergedSortedArr.push(arr2[arr2Pointer++]);
      }
      mergedSortedArr.push(arr1[i]);
    } else {
      mergedSortedArr.push(arr1[i]);
      mergedSortedArr.push(arr2[arr2Pointer++]);
    }
  }

  if (arr2Pointer <= arr2.length - 1) {
    for (let i = arr2Pointer; i < arr2.length; i++) {
      mergedSortedArr.push(arr2[i]);
    }
  }
  return mergedSortedArr;
};

// merge sort execution
const mergeSort = (arr = []) => {
  if (arr.length === 1) {
    return arr;
  }
  const low = 0;
  const mid = (arr.length / 2) - 1;
  const high = arr.length - 1;

  const firstArr = [];
  const secondArr = [];

  for (let i = low; i <= high; i++) {
    if (i <= mid) {
      firstArr.push(arr[i]);
    } else {
      secondArr.push(arr[i]);
    }
  }
  const sortedArr1 = mergeSort(firstArr);
  const sortedArr2 = mergeSort(secondArr);

  const arrMerged = merge(sortedArr1, sortedArr2);
  return arrMerged;
}

const generateRandomArray = () => {
  const startTime = Date.now();
  const arr = [];
  for (let i = 0; i <= 10**8; i++) {
    arr.push(parseFloat((Math.random() * 83).toFixed(2)));
  }
  const endTime = Date.now();
  console.log(`time taken to create array = ${endTime - startTime}ms`);
  return arr;
}

const array = generateRandomArray();

const startTime = Date.now();
const sortedArr = mergeSort(array);
const endTime = Date.now();
const timeDiff = endTime - startTime;

console.log(sortedArr);
console.log(`time taken for sorting = ${timeDiff}ms`);
