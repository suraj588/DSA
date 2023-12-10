// You are given an array. The task is to reverse the array and print it.

const example = [2, 4, 1, 2, 4, 9, 6];

// Space Complexity = O(n)
const reverseArray = array => {
  const updatedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    updatedArray.push(array[i]);
  }
  return updatedArray;
};

console.log(reverseArray(example));
console.log(example);

// Space Complexity = O{1}
const reverseArray1 = array => {
  let i = array.length - 1;
  let j = 0;
  while(i > j) {
    const intermediate = array[i];
    array[i] = array[j];
    array[j] = intermediate;
    i--;
    j++;
  };
  return array;
};

console.log(reverseArray1(example));
console.log(example);
