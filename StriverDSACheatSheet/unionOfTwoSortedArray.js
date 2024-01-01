// Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
// The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

const unionOfSortedArrays = (arr1, arr2) => {
  const sortedMap = {};
  const maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] && !sortedMap[arr1[i]]) {
      sortedMap[arr1[i]] = arr1[i];
    }
    if (arr2[i] && !sortedMap[arr2[i]]) {
      sortedMap[arr2[i]] = arr2[i];
    }
  }
  return Object.values(sortedMap);
};

console.log(unionOfSortedArrays([1,2,3,4,5], [2,3,4,4,5]));
console.log(unionOfSortedArrays([1,2,3,4,5,6,7,8,9,10], [2,3,4,4,5,11,12]));
