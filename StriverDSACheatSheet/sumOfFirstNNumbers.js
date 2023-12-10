// Sum of first N Natural Numbers

const sumOfFirstNNumbers = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + sumOfFirstNNumbers(n - 1);
};

const sumOfNNumbers = n => ((n*(n+1)) / 2);

console.log(sumOfFirstNNumbers(5));
console.log(sumOfNNumbers(8));
