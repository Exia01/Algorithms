/* Implement a function called CountUniqueValues.
Which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it'll always be sorted */

// let arr = [1, 1, 1, 1, 1, 1, 2] //2
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13] //7
                  
// let arr = [] // 0
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17] // 0
// let arr = [-2, -1, -1, 0, 1] //4

// function CountUniqueValues(arr) {
//     /* First we test if we are even passing an array or if the lenght is more than 1 number */
//     let count = 1
//     if (!Array.isArray(arr)) {
//         return "Needs to be an array please"
//     }
//     if (arr.length < 1) {
//         return 0
//     }

//     let left = 0
//     let right = 1
    
//     while (arr[left] <= arr.length){
//         // console.log('Array of left is: ' + arr[left])
//         // console.log('Array of right is: ' + arr[right] + '\n')
//         // console.log('count is: ' + count)
//         if(arr[right] == undefined) {
//             return count
//         }
//         if (arr[left] < arr[right]) {
//             count++
//             arr[left] = arr[right]
//             right++
//         } else if (arr[left] == arr[right]) {
//             arr[left] = arr[right]
//             right++
//         } else {
//             left++
//         }
       
//     }
//     return count
// }

// console.log(CountUniqueValues(arr))

/* Another way of doing thins we can implements a dictionary can count the numbers on the array and then for of to obtain the total */

// let arr = [1, 1, 1, 2, 2, 2, 4, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13] //7

function CountUniqueValues2(arr) {
    /* we run test of it first */
    if (!Array.isArray(arr)) {
        return "Needs to be an array please"
    }
    if (arr.length < 1) {
        return 0
    }
    let totalNums = {}

/* we can then cycle through the array wich is onto itself quick */
    for (let num of arr) {
        totalNums[num] = (totalNums[num] || 0) + 1
    }
    // console.log(totalNums)
    let total =0
    for (key in totalNums) {
        total += 1
    }
    return total
}

console.log(CountUniqueValues2(arr))
