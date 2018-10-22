/* 
Write a Function Called averagePair.
Given a Sorted array of integers and target average.
Solution determines if there is a pair of values in the aray where the average pair equals the target avg.
There may be more than one pair that matches the average target
*/

const log = function(x) {
  console.log(x);
};

let arr = [1,3,3,5,6,7,10,12,19,8];
let num = 2.5;

function averagePair(arr, num) {
  let start = 0;
  let sum = 0;
  let end = arr.length - 1;
  let results = [false, []];

  /* 
    the array does not need to be organized, nor does it call to be.
    Otherwise the check would go here.

    arr.sort(function(a, b) {
        return a - b;
    });
 */

  /* implement lenght checks here */
  if (arr.length < 1) {
    return false;
  }

  while (start < end) {
   let avg = (arr[start] + arr[end]) /2
    if (avg == num) {
      results[0] = true;
      results[1].push(arr[start], arr[end]);
      return results;
    } else if (avg < num) {
      start++;
    } else {
      end++;
    }
  }
  return false;
}
log(averagePair(arr, num));





/* Another way:

function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

*/