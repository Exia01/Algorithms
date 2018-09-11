/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as the variables below.
Note: You may assume the string contains only lowercase alphabets.
*/

let str1 = 'anagram'
let str2 = 'nagaram'

function validAnagram(str1, str2) {

    /* check if both strings are the same lenght */
    if (str1.lenght !== str2.lenght) {
        return false
    }
    

   /*  Here we want to instanciate objects.
    This will enable faster access to each character to compare. */
    let lookup = {}
    
    /* if the check passes then we perform a "for of" */
    
    for (let char of str1) {
        lookup[char] = (lookup[char] || 0) + 1
   
        /* For arr on each iteration we will assign the char being the letter and create a value of 0 and increase it.
        If the char already exist then we will increase the number value by 1 */
    }
    // console.log(lookup)
    for (let char in str2) {
        if (!(str2[char] in lookup)) {
            return false
        }
        console.log(char)
        console.log(lookup[char])
    }
    return true
}

console.log(validAnagram(str1, str2))
// validAnagram(str1, str2)