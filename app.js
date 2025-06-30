/**
Code
Testcase
Test Result
Test Result
1657. Determine if Two Strings Are Close
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
 
 */
//swap any two existing characters
//transform every occurence of an existing character into another
var closeStrings = function (word1, word2) {
  const isSwappable = function (word1, word2) {
    //all chars have to exist in both strings ,both strings should have  same length , count for each char has to be the same
    if (word1.length !== word2.length) {
      return false;
    }

    const map1 = {};
    const map2 = {};

    for (let i of word1) {
      //evaluate bracket , gets 0 when map[i] is undef , and its value when defined, either way , add  + 1
      map1[i] = (map1[i] || 0) + 1;
    }

    for (let i of word2) {
      //evaluate bracket , gets 0 when map[i] is undef , and its value when defined, either way , add  + 1
      map2[i] = (map2[i] || 0) + 1;
    }

    for (let i of word1) {
      if (map1[i] !== map2[i]) {
        return false;
      } else if (!word2.includes(i)) {
        return false;
      }
    }

    return true;
  };

  const isTrasnformable = (word1,word2) => {};

  if (isSwappable(word1, word2)) {
    return true;
  } else {
    return false;
  }
};

console.log(closeStrings("abcaf", "bcaag"));
