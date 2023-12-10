//  Given a string of length N. Check if the given string is a palindrome without using any built-in functionality.

const isPalindrome = str => {
  let start = 0;
  let end = str.length - 1;

  while (end > start) {
    if (str[end].toLowerCase() !== str[start].toLowerCase()) {
      return false;
    }
    end--;
    start++;
  }

  return true;
};

console.log(isPalindrome("RcaeCar"));
