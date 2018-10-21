/* Implement a function called, AreThereDuplicates which accepts a variable number of arguments.
It then checks whether there are any duplicates among the arguments passed in. 
This can be solved using the frequency pattern OR the multiple pointers patern. 
 */


/* if we really want to make this difficult 
let arg = 1 
let arg2 = 2
let arg3 = a
*/

let log = function (x) {
    console.log(x)
}
let testObj = {
    test1: [1, 2, 3, 4, 1, 2, 3, 5, 6, 8, 10, 1, 1, 2, 2],
    test2: 1,
    test3: ['a', 'b', 'c', 'a'],
}
let arg1 = undefined
let arg2 = undefined


function AreThereDuplicates(testObj) {

    let tempDic = {}
    let results = {}
    let response = [0, results]


    /*  First we check if are passing arguments */
    if (testObj == undefined || testObj == null) {
        return "Please provide proper values to compare"
    }

    /* Loop through the test1 array only and construct a dictionary from it */
    for (const [key, value] of Object.entries(testObj.test1)) {
        tempDic[value] = (tempDic[value] || 0) + 1
    }


    /* Simply check if the values are more than 1 and send the "response" */
    for (const [key, value] of Object.entries(tempDic)) {
        if (value > 1) {
            results[key] = value
            response[0] = 1
        }
    }
    return response
}


console.log(AreThereDuplicates(testObj, arg1, arg2))


/* 
Used the Spread Resource:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 */