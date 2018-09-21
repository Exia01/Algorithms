/* Given a sorted array of integers write a function called search.
The function accepts any value and returns the index where the value passed to the function is located.
If the is not found, return -1
Time complexity of this algithm is Log(N) - Binary search

*/
let arr = [1, 3, 5, 6, 26, 32, 35, 39, 45, 51, 55, 56, 57, 234, 235, 756]
const val = 235

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
    let min = 0;
    let max = arr.length - 1
    /* We are intanciating these variables so that we can add them in a while-loop */
    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        console.log(middle)
        console.log(`The min variable is now: ${min}`)
        console.log(`The max variable is now: ${max}`)
        // let currentElement = arr[middle];
        console.log(`The middle is now: ${arr[middle]} \n`)
        if (arr[middle] < val) {
            min = middle + 1
           /*  If the middle of the array is less than we move up one value */
        } else if (arr[middle] > val) {
            max = middle - 1
           /*  If the middle of the array is more than we move down one value */
        } else {
            return middle
        }
    }
    return -1
    /* If we hit this return, we did not find the number in the array */
}
console.log(search(arr, val))
[1, 3, 5, 6, 26, 32, 35, 39, 45, 51, 55, 56, 57, 234, 235, 756]