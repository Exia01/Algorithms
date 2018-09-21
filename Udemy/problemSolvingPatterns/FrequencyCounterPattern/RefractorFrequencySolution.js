/* 
This refractor solution uses Fecrency Counter pattern.
It has a quadratic time of O(n) since each fuction is only running as many times as the array is in lenght and it is not embedded. 
*/

let arr = [1, 2, 3];
let arr2 = [4, 1, 9];


// let arr = [1, 2, 3, 2, 5];
// let arr2 = [9, 1, 4, 4, 11];

function same(arr, arr2) {
    /* if the arrays do not match in lenght then we know this is false */
    if (arr.length !== arr2.length) {
        return false
    }


    /* We are instanciating objects here ans we will store counter of variables to then compare to them later. */
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr) {

        /* For arr on each iteration we will assign the key being the number and create a value of 0 and increase it.
        If the key already exist then we will increase the number value by 1 */
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        /* For arr2 on each iteration we will assign the key being the number and create a value of 0 and increasing it.
        If the key already exist then we will increase the number value by 1 */
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        // console.log(frequencyCounter2[val])
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    /* Here we start by looping through the keys "numbers" inside of the object frequencyCounter1 */
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        /* if the key * 2 is not a "Key" value in frequencyCounter2(object)
        if it is not then it is false */
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
        /* We check if the key of frequencyCounter2 **2 equals to the one in frequencyCounter1.
        If they do not match then we return false, otherwise we continue and it's true. */
        // console.log(frequencyCounter2[key **2])
        
    }
    return true

}
console.log(same(arr, arr2))