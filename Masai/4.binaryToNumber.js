// 4. Given a binary string, output the integer so formed.

const toNumberFromBinary = binary => {
  const binaryLength = binary.length;
  let num = 0;
  for (i = 1; i <= binaryLength; i++) {
    num = num + (+binary[i - 1] * (2 ** (binaryLength - i)));
  }
  return num;
};

console.log(toNumberFromBinary("1"));
