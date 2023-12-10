// Given an integer N. Print the Fibonacci series up to the Nth term.

const getFibonacciSeries = (n, acc = []) => {
  if (acc.length === n) {
    return acc.join(' ');
  }
  if (n === 1) {
    return 0;
  }
  acc.push(acc[acc.length - 1] + acc[acc.length - 2]);
  return getFibonacciSeries(n, acc);
};

console.log(getFibonacciSeries(1));
