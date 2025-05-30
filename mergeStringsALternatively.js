/**You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s */

// check for length of both string
//find longest string and get additional characters

var mergeAlternately = function (word1, word2) {
  let output = "";

  if (word1.length !== word2.length) {
    let shortest = word1.length < word2.length ? word1 : word2;

    let longest = word1.length < word2.length ? word2 : word1;
    for (let i = 0; i < shortest.length; i++) {
      output = output + word1[i] + word2[i];
    }

    output = output + longest.slice(shortest.length, longest.length);
    return output;
  }

  for (let i = 0; i < word1.length; i++) {
    output = output + word1[i] + word2[i];
  }
  return  output;
};

mergeAlternately("ab", "pqrs");
