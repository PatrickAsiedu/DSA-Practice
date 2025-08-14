/**Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300]. */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

  //anytime we meet a [ we call decode , when we meet ], we return  value , we need to keep track of the number and result

    let index = 0;
    
    function decode() {
        let result = '';
        let num = 0;
        
        while (index < s.length) {
          //use current value of index, then increment (post increment)
            const char = s[index++];
            
            if (char >= '0' && char <= '9') {
                // Build the number (could be multi-digit like 10, 100)
                num = num * 10 + parseInt(char);
            } else if (char === '[') {
                // Recursively decode the content inside brackets
                const decodedString = decode();
                // Repeat the decoded string num times
                result += decodedString.repeat(num);
                num = 0; // Reset number
            } else if (char === ']') {
                // End of current bracket, return result
                return result;
            } else {
                // Regular character, add to result
                result += char;
            }
        }
        
        return result;
    }
    
    return decode();
};

console.log(decodeString("3[a2[c]]"))
