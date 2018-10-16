/* 
Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency digits 
Time: O(N)
*/

// let problem = {
//     num1: 182,
//     num2: 281
// }

let num = '182456'
let num2 = 2816545

// let num = 51997788443322
// let num2 = 22334488779915



function sameFrequency(num, num2) {
    /*  First if we wanted to explicitly check if we're passing two numbers */

    // if (typeof (num) == String || typeof (num2) == String) {
    //     return 'You Can\'t pass a string as an argument. Needs to be a number.'
    // }
    if (num < 0 || num2 < 0) {
        return 'Please provide positive integers'
    }


    /* We are instanciating objects here ans we will store counter of variables to then compare to them later. */
    let frequencyCount = {}
    let frequencyCount2 = {}
    let newNum = num.toString().split('')
    // let realNum = newNum.map()

    let newNum2 = num2.toString().split('')
    // let realNum = newNum.map()

    /*     so we save time on looping we compare lengths */
    if (newNum.length !== newNum2.length) {
        return false
    }
    // console.log(newNum)
    // console.log(realNum)

    for (let val of newNum) {
        frequencyCount[val] = (frequencyCount[val] || 0) + 1
    }
    for (let val of newNum2) {
        frequencyCount2[val] = (frequencyCount2[val] || 0) + 1
    }
    // console.log(frequencyCount)
    // console.log(frequencyCount2)

    /*  First we match keys the */
    for (let key in frequencyCount) {
        if (!(key in frequencyCount2)) {
            return false
        }
        // console.log(frequencyCount[key], frequencyCount2[key])
        if (frequencyCount[key] !== frequencyCount2[key]) {
            return false
        }
    }
    return true
}


console.log(sameFrequency(num, num2))