/* Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pain where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist  */

/* This solution has a time complexity of -> O(N^2)
 */
// let arr = [1, 2, 3]
let arr = [-3, -2, -1, 0, 1, 2, 3,]


function sumZero(arr) {
    let result = []
    /* First we check if it is an array or if it contains anything */
    if (!Array.isArray(arr)) {
        return "Needs to be an array please"
    }
    if (arr.length < 2) {
        return "Need more 1 number to compare"
    }

    /* if the checks pass then we can move forward with the operation.
    We use an emmbeded for loop to iterate through the numbers  and then we increase it and each passing. */
    for (let num in arr) {
        for (let x = num + 1; x < arr.length; x++)
            if (arr[num] + arr[x] == 0) {
                result.push(arr[num], arr[x])
                return result
            }

    }
    return undefined
}

console.log(sumZero(arr))
