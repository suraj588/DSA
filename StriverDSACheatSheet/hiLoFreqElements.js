// Find the highest/lowest frequency element

const getHighLowFreqElements = (arr = []) => {
  const count = {};
  arr.forEach(item => {
    count[item] ? count[item]++ : count[item] = 1;
  });
  let maxCount = count[arr[0]];
  let minCount = count[arr[0]];
  let max = arr[0];
  let min = arr[0];
  for (const key in count) {
    if (count[key] > maxCount) {
      max = key;
      maxCount = count[key];
    }
    if (count[key] < minCount) {
      min = key;
      minCount = count[key];
    }
  }
  console.log('element occuring max times = ', max);
  console.log('element occuring min times = ', min);
};

getHighLowFreqElements([10,5,10,15,10,5]);
getHighLowFreqElements([0,15,10,15,10,15]);
