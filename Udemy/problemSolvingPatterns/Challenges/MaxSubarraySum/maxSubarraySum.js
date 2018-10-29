/* Given an array of integers and a number, write a function called maxSubarraySum.
The function finds the maximun of a subarray with the length of number passed to the function. 

---Note--- that a subarray must consist of a consecutive elements from the original array.

maxSubarraySum([100,200,300,400],2) --> 700 
    [100,200,300] is a subarray but [100,300] is not
*/
const log = (object) => {
    return console.log(object)
}

let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]
let n = 4
let regex = /[a-zA-Z]+/g

function maxSubarraySum(...args) {

    let tempSum = 0
    let maxSum = 0
    /*Check if the array can be checked with the num comparison */
    if (arr.length < n) {
        return null
    }
    /* Check for letters */
    if (regex.test(arr)) {
        return 'Numbers only please'
    }
    /* Is it an array? */
    if (!Array.isArray(arr)) {
        return 'Please provide an array.'
    }
    // log(arr)

    /* Take the first "n" numbers of the array for base comparison */
    for (let i = 0; i < n; i++){
        maxSum += arr[i]
    }

    /* Otherwise it will start with 0 need to set it */
    tempSum = maxSum
    // log(maxSum)
    /* Start at "n" position and slide through */
    for (let i = n; i < arr.length; i++){
        log(`sliding moving past ${arr[i - n]}`)
        log(`array of i is: ${arr[i]} `)
        tempSum = tempSum - arr[i - n] + arr[i]
        log(tempSum + '\n')
        maxSum = Math.max(maxSum, tempSum)
        /* or */
        // if (tempSum > maxSum) {
        //     maxSum = tempSum
        // }
    }
    return maxSum
}

console.log(maxSubarraySum(arr, n))