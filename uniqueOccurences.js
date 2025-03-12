/**Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true */

//count occurences of all unique integers
//compare count for each element, if any of them is same return false, else true

var uniqueOccurrences = function (arr) {
  let myMap = new Map();
  let mySet = new Set([...arr]);
  let setOfOccurences = new Set();
  let sizeofMap = 0;
  for (let i of arr) {
    myMap.set(i, myMap.get(i) ? myMap.get(i) + 1 : 1);
  }

  for (let i of myMap.values()) {
    sizeofMap += 1;
    setOfOccurences.add(i);
  }

  if (sizeofMap !== setOfOccurences.size) {
    return false;
  } else return true;
};

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
