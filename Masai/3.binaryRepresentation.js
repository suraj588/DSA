// 3. Write a program to print Binary representation of a given number.

const toBinary = num => {
  let binary = '';
  let numCopy = num;

  if (numCopy === 0) {
    return 0;
  }
  while (numCopy !== 0) {
    binary = (numCopy % 2) + binary;
    numCopy = Math.floor(numCopy / 2);
  }
  return binary;
};

for (let i = 0; i <= 10; i++) {
  console.log(`Binary of ${i} = ${toBinary(i)}`);
}

console.log(toBinary(563919191))
