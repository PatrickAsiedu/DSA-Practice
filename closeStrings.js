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
  
    console.log(map1);
    console.log(map2);
  
    //all chars have to exist in both strings ,both strings should have  same length
    if (word1.length !== word2.length) {
      return false;
    }
  
    for (let i of word1) {
      if (!word2.includes(i)) {
        return false;
      }
    }
  
    if (word1.length !== word2.length) {
      return false;
    }
    //the frequencies of each character in word 1 , has to match the freq in word 2 , ie [1,2,3] -- [1,2,3]
    const freq1 = Object.values(map1).sort((a, b) => a - b);
    const freq2 = Object.values(map2).sort((a, b) => a - b);
  
    for (let i = 0; i < freq1.length; i++) {
      if (freq1[i] !== freq2[i]) {
        return false;
      }
    }
  
    return true;
  };
  
  console.log(
    closeStrings(
      "yyyuxuyuxxxxxxxyyyyyxxyyxxxyyyxyx",
      "uxuxuuuuuuxuuyuuuuuuyuuuuuuuyyuuu"
    )
  );
  