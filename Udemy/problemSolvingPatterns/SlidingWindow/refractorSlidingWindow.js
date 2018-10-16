/* Write a function called maxSubarraySum.
The function should accept an array of interger an number called name.
The function should calculate the maximum sum of n consecutive elements in the array.
This refractor solution implements a O(N) --> this is because it is linear and we only loop one time each.
*/

let arr = [2, 6, 9, 2, 1, 8, 5, 6, 3] // 19
n = 3

/* let maxSubarraySum = (arr, n) => {
    
} */

function maxSubarraySum(arr, n) {
    let tempSum = 0
    /*  This ensures we take the lowest number that we will compare */
    let maxSum = 0
    /* First we want to test wether the "arr" object is an array.
    Or if it contains strings. 
    */
    if (!Array.isArray(arr)) {
        return 'Please provide an array.'
    }
    if (arr.includes(" ")) {
        return 'Array can\'t contain strings'
    }
    if (n > arr.length) {
        return null
    }
    /*  Now that we have implemented our checks we can move forward.
        We now want to add the n number of in the array as a first run.
        This is how we are creating the "window which we will then slide."
    */
    for (let i = 0; i < n; i++) {
        // console.log(`Arr[i] is currently at: ${arr[i]}`)
        maxSum += arr[i];
    }
    tempSum = maxSum
    /* We then want to make the tempSum the maxsum and we want to continously 'slide' through the array
       We take the number of from the beginning of the array -->  arr[i - n]
       Then we add the number at the end --> arr[i]
    */
    // console.log(`maxSum is ${maxSum}`)
    for (let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i]
        console.log(`The Current Array is: ${arr[i]}`)
        console.log(`tempSum is: ${tempSum} \n`)
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubarraySum(arr, n))

/* [2, 6, 9, 2, 1, 8, 5, 6, 3] --> 19 */