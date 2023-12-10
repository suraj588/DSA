// “Given a string, check if the string is palindrome or not.”  A string is said to be palindrome if the reverse of the string is the same as the string.

const isPalindromeIterative = str => {
  let alphaNumericString = '';
  for (let k = 0; k < str.length; k++) {
    const charAsciiCode = str.charCodeAt(k);
    if ((charAsciiCode >= 48 && charAsciiCode <= 57) || (charAsciiCode >= 65 && charAsciiCode <= 90) || (charAsciiCode >= 97 && charAsciiCode <= 122)) {
      alphaNumericString += str[k].toLowerCase();
    }
  }
  if (alphaNumericString === '') return true;
  let i = alphaNumericString.length - 1;
  let j = 0;
  while (i > j) {
    if (alphaNumericString[i] !== alphaNumericString[j]) {
      return false;
    }
    i--;
    j++;
  }
  return true;
};
console.log('<------------------Iteratively------------------>');

console.log('yes', isPalindromeIterative('yes'));
console.log('non', isPalindromeIterative('non'));
console.log('racecar', isPalindromeIterative('racecar'));
console.log('s', isPalindromeIterative('s'));
console.log('', isPalindromeIterative(''));
console.log('121', isPalindromeIterative('121'));
console.log('0P', isPalindromeIterative('0P'));
console.log('9,8', isPalindromeIterative('9,8'));

const isPalindromeRecursive = (str) => {
  const strLength = str.length;
  if (strLength === 1 || strLength === 0) {
    return true;
  }
  if (str[0] === str[strLength - 1]) {
    return isPalindromeRecursive(str.substring(1, strLength));
  }
  return false;
};

console.log('<------------------Recursvely------------------>');

console.log('yes', isPalindromeIterative('yes'));
console.log('non', isPalindromeIterative('non'));
console.log('racecar', isPalindromeIterative('racecar'));
console.log('s', isPalindromeIterative('s'));
console.log('', isPalindromeIterative(''));
console.log('121', isPalindromeIterative('121'));
