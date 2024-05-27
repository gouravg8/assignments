/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let strArr = str.toLowerCase().split("");
  let vowelsLength = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    vowelsLength += strArr.filter((el) => el == vowels[i]).length;
  }
  return vowelsLength;
}

// console.log(countVowels("suar hai TU biro"));

export default countVowels;
