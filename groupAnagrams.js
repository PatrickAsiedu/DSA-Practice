/**Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat". 
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//loop through each word, sort the word , store the word in map of k , word and  [index] , now go through the map values , use each index to query an put the word and push to result array
//loop through the word, sort word and store 
var groupAnagrams = function(strs) {

    return strs.sort((a, b) => a - b)
    
    
};


console.log(groupAnagrams("tea"))