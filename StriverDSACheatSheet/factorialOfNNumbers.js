// Factorial of a Number : Iterative and Recursive

const factorialIterative = (n) => {
  let factorial = 1;
  for (let i = n; i > 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

console.log(factorialIterative(0));


const factorialRecursive = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
};

console.log(factorialRecursive(0));

