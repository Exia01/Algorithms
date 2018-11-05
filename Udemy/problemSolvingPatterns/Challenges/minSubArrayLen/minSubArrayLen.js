/* 
Write a function call minSubArrayLen. 
It accepts two paramenters:
    - A positive integer
    - An array of positive integers

Function should return the minimal lenght of a contigous subarray of which the sum is greater than OR equal to the integer passed to the function.

If there isn't one return 0 instead.
*/

let regex = require('../../../Modules/Regex');
let arr = [2, 3, 1, 2, 4, 3]; //2
///should have temp which will hold 1,2,4 orginally
let target = 7;

function minSubArrayLen(...args) {
  let length = arr.length;

  if (!Array.isArray(arr)) {
    return 'Please provide an array.';
  }
  /* Test for letter in the array */
  regex.letterValidation(arr);

  /* Check if there is a lenght */

  if (length == 0) {
    return 0;
  }

  /* Checks passed */
  let result = arr.length;
  let i = 0;
  let sum = arr[0];

  for (let j = 0; j < arr.length; ) {
 /* These Explain the process in detail  
    console.log(`i is: ${i}`);
    console.log(`j is: ${j}`);
    console.log(`arr is: [${arr}]`);
    console.log(`sum is: [${sum}]`);
    console.log(`targer is: ${target}`);
    console.log(`arr[j] is currently at: ${arr[j]}`);
    console.log(`arr[i] is currently at: ${arr[i]} \n`); */

    if (i == j) {
    //   console.log(`i does equal j ${i}, ${j} \n`);
      if (arr[i] >= target) {
        return 1; /* if single elem is large enough */
      } else {
        j++;
        if (j < arr.length) {
          sum = sum + arr[j];
        } else {
          return result;
        }
      }
    } else {
      /* if sum is large enough, move left cursor */
      if (sum >= target) {
        result = Math.min(j - i + 1, result);
        sum = sum - arr[i];
        i++;
        /* if sum is not large enough, move right cursor */
      } else {
        j++;

        if (j < arr.length) {
          sum = sum + arr[j];
        } else {
          if (i == 0) {
            return 0;
          } else {
            return result;
          }
        }
      }
    }
  }

  return result;
}

console.log(minSubArrayLen(arr, target));


/* Used this resource:
http://blog.sodhanalibrary.com/2015/06/minimum-size-sub-array-sum-javascript.html#.W-CabpNKjPr
 */

/* Another Example:
https://github.com/chihungyu1116/leetcode-javascript/blob/master/209%20Minimum%20Size%20Subarray%20Sum.js
*/

/* Figure out how to do debugger:
https://www.youtube.com/watch?v=xa_60srQAKo */
