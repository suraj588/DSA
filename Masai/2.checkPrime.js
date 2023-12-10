// 2. Given an integer N. Check whether N is prime or not.

const isPrime = n => {
  if (n <= 1) {
    return false;
  }
  let flag;

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      flag = true;
      break;
    }
  }

  return !flag;
};

for (let i = -5; i < 101; i++) {
  console.log(`Number - ${i} is ${isPrime(i) ? 'a Prime' : 'not a Prime'}`);
}
