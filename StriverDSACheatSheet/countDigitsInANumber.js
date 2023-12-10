// Given an integer N, write a program to count the number of digits in N.

const countDigits = (n) => ( (n + '').length );

console.log(countDigits(123));
console.log(countDigits(01)); // Doesn't return 4 which is expected.
