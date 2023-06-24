/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

export function isAnagram(str1: string, str2: string) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  const _str1 = str1.split("").sort().join("");
  const _str2 = str2.split("").sort().join("");
  // console.log(_str1 === _str2);
  return _str1 === _str2;
}

// isAnagram("naman", "gmmmm")

