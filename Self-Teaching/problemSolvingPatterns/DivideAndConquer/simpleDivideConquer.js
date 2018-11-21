/* Given a sorted array of integers write a function called search.
The function accepts any value and returns the index where the value passed to the function is located.
If the is not found, return -1
Time complexity of this algithm is O(N)
*/
let arr = [1, 3, 5, 6, 26, 74, 72, 234, 235, 756]
const val = 1

function search(arr, val) {
    /*     As usual we have to check for test cases */
    if (!Array.isArray(arr)) {
        return 'Please provide an array.'
    }
    if (arr.includes(" ")) {
        return 'Array can\'t contain strings'
    }
    if (arr.length < 0) {
        return null
    }
    if (!Number.isInteger(val)) {
        return 'Value needs to be a number'
    }
    /* If all the test pass then we proceed forward */
    for (let num of arr) {
        if (num === val) {
            return num
        }
    }
    return -1
}
console.log(search(arr, val))