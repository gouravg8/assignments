/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (!numbers.length > 0 || !numbers) undefined;
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    largest = numbers[i] > largest ? numbers[i] : largest;
  }
  return largest;
}

export default findLargestElement;
