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
  /* /[^a-zA-Z0-9]/g: This is a regular expression pattern enclosed between two slashes. It represents any character that is not a letter (uppercase or lowercase) or a digit (0-9).
[^a-zA-Z0-9]: The caret (^) inside the square brackets means "not." So, [^a-zA-Z0-9] matches any character that is not an uppercase letter, lowercase letter, or digit.
/g: The 'g' flag stands for "global" and ensures that all matching occurrences in the string are replaced, not just the first one.
*/

  return transformedStr;
}

export function isPalindrome(str) {
  const final = transformString(str);

  const _str = final.split("").reverse().join("");

  return final === _str;
}

