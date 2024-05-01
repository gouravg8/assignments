/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  if (str1.length != str2.length) return false;

  const str1Arr = [...str1];
  let str2Arr = [...str2];

  for (let i = 0; i < str1Arr.length; i++) {
    if (!str2Arr.includes(str1Arr[i])) {
      return false;
    } else {
      str2Arr.splice(str2Arr.indexOf(str1Arr[i]), 1);
    }
  }

  return true;
}

console.log(isAnagram("school master", "the ClassRoom"));
export default isAnagram;
