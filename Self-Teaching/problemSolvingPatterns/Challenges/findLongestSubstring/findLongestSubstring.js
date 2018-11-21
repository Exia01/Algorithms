/* Write a function called FindLongestSubstring.
Function accepts a string and returns the length of the longest substring with all distinct character.

Example: 

findLongestSubstring('rithmschool') //7

*/


let regex = require('../../../Modules/Regex');

let str = 'rithmschool'

const findLongestSubstrig = (str) => {
    // Check to ensure it is a string
    // console.log(typeof str)
    (regex.stringValidation(str))

    // return 1 if only one letter
    if (str.length < 2) {
        return 1
    }


    // All checks passed
    // store characters
    let dic = {}
    let longest = 0;
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // if in dictionary
        if (dic[char]) {
            //compare and take the highest value
            start = Math.max(start, dic[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1)

        // store the index of the next char so as to not double count
        dic[char] = i + 1;

    }
    return longest;


}

console.log(findLongestSubstrig(str))


// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.