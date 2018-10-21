/* 
Write a Function Called averagePair.
Given a Sorted array of integers and target average.
Solution determines if there is a pair of values in the aray where the average pair equals the target avg.
There may be more than one pair that matches the average target
*/

const log = function (x) {
    console.log(x)
}

let arr = [1, 2, 3]
let avg = 2.5

function averagePair(arr, avg) {
    let left = 0
    let sum = 0
    let right = arr.length - 1
    let results = [false, []]

    /* 
    the array does not need to be organized, nor does it call to be.
    Otherwise the check would go here. 
    */

    /* implement lenght checks here */
    if (arr.length < 1) {
        return false
    }

    while (left < right) {
        log(`Current Values are: left, right: (${arr[left]}, ${arr[right]})`)
        sum = arr[left] + arr[right]
        let temp = (sum / 2).toFixed(2)
        if (temp == avg) {
            if (results[0] == false) {
                results[0] = true
            }
            results[1].push([arr[left], arr[right]])
        }
        left++
        let temp2 = right
        log(`arr[left] is: ${arr[left]}`)
        log(`arr[right] is: ${arr[right]}`)
        log(arr[temp2--] !== arr[left])
        log(`arr[right] is: ${arr[right]}`)

    }
    return results

}
log(averagePair(arr, avg))