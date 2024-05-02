/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const regex = /[\s\p{P}]/gu;
  let strArr = str.toLowerCase().replace(regex, "").split("");
  let s = 0,
    e = strArr.length - 1;
  while (s <= e) {
    if (strArr[s] != strArr[e]) {
      return false;
    }
    s++;
    e--;
  }
  return true;
}
// console.log(str[2] === str[str.length - 2]);

export default isPalindrome;
