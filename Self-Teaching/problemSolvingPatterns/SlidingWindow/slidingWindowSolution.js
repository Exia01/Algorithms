/* Write a function called maxSubarraySum.
The function should accept an array of interger an number called name.
The function should calculate the maximum sum of n consicutive elements in the array 
Since these are embedded forloops we can say that this is O(n^2)
*/

let arr = [2, 6, 9, 2, 1, 8, 5, 6, 3] // 10
n = 3

/* let maxSubarraySum = (arr, n) => {
    
} */

function maxSubarraySum(arr, n) {
    let tempSum = 0
    /*  This ensures we take the lowest number that we will compare */
    let finalSum = -Infinity
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
    /*  Now that we have implemented our checks we can move forward */
    
    for (let i = 0; i < arr.length - n + 1; i++) {
        /* On this example we are starting with the array.
        we then take n subtract it and add 1 to ensure we are matching the end of the array comparison properly. */
        tempSum = 0
        // console.log('Array of I  is: ' + i)
        for (let j = 0; j < n; j++) {
            /* In the embedded for loop we then add the numbers located on each pass  */
            // console.log(`${arr[i + j]}`)
            tempSum += arr[i + j]; 
            // console.log('TempSum is: ' + tempSum + "\n")
        }
      /*   Then we want to compare if the temp is greater than the final sum */
        if (tempSum > finalSum) {
            finalSum = tempSum;
        }
        console.log(tempSum, finalSum)
    }
    return finalSum;
}
console.log(maxSubarraySum(arr, n))