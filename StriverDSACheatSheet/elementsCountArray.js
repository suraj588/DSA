// Count frequency of each element in the array

const logFrequencies = (arr = []) => {
  const count = {};
  arr.forEach(item => {
    count[item] ? count[item]++ : count[item] = 1;
  });
  for (const key in count) {
    console.log(key + ' ' + count[key]);
  }
};

logFrequencies([10,5,10,15,10,5]);
