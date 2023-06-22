/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function transformString(str) {
  // Convert the string to lowercase
  let transformedStr = str.toLowerCase();

  // Remove special characters and white spaces using regular expressions
  transformedStr = transformedStr.replace(/[^a-zA-Z0-9]/g, "");

  return transformedStr;
}

function isPalindrome(str) {
  const final = transformString(str);

  const _str = final.split("").reverse().join("");

  return final === _str;
}

module.exports = isPalindrome;
