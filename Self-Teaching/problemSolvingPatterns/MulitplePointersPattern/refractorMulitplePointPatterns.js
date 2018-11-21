/* Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pain where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist

This is the refractor Solution
*/

/* This solution has a time complexity of -> O(N)
 */
// let arr = [1, 2, 3]
let arr = [-4, -3, -2, -1, 0, 1, 2, 3, 10]

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1
    console.log(right)

    /* Since the array is organized we can set this while loop to run between two points.arr
    If found it will return an array if not it will stop and return undefined */
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
}


console.log(sumZero(arr))