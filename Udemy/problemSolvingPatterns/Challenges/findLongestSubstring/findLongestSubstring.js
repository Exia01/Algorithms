/* Write a function called FindLongestSubstring.
Function accepts a string and returns the length of the longest substring with all distinct character.

Example: 

findLongestSubstring('rithmschool') //7

*/
let regex = require('../../../Modules/Regex');

let str = "rithmschool"

const findLongestSubstrig = (str) => {
    // Check to ensure it is a string
    regex.stringValidation(str)

    //return 1 if only one letter
    if (str.length < 2) {
        return 1
    }

    /* All checks passed, solve problem */

    // store letter comparison
    let dict = {}
    let end = str[1]
    let count = 0

    const doSomething = (obj, prop) => {
        let {[prop]: omit, ...res} = obj
        return res
      }

    for (let start = 0; start < str.length; start++) {
        dict[str[start]] = (dict[str[start]] || 0) + 1
        // dict[str[end]] = (dict[str[end]] || 0) + 1
        // if (str[end + 1] == str[start]) {
        //     start++
        //     doSomething(dict, start)
        // }

    }
    const removeKey = (key, {[key]: _, ...rest}) => rest;
    removeKey('o', 1, dict)
console.log(dict)
    


}

console.log(findLongestSubstrig(str))






// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/* 

var lengthOfLongestSubstring = function(s) {
    
    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')
    
    for (i = 0; i < s.length; i++) {
        console.log(s.length)
        let current = map[arr[i]]
        console.log(`map of i is: ${map[arr[i]]}`)
        console.log(`current is ${current}`)
        console.log(`max length is  ${maxLen} \n`)
        if (current!=null && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }
        
        map[arr[i]] = i
    }
    
    return maxLen
    
    
};

console.log(lengthOfLongestSubstring('abcabcbb')) */