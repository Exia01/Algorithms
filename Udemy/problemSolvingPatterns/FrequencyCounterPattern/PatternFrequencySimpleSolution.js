/*
 -Write a function called "Same" which accepts two arrays
 - the fucntion should return true if every value in the array has it's correspoding value - 
 squared in the second array. the frequency of values must be the same. 
 */

let arr = [1, 2, 3];
let arr2 = [4, 1, 9];

function same(arr, arr2) {
  //have a check
  if (arr.length !== arr2.length) {
    return false;
    // throw "Arrays need to match.";
  }
  // if the check passes then we perform a "for of"
  for (let num of arr) {
    /* we search for it ussing indexOf which returns the first value */
    let correctIndex = arr2.indexOf(num ** 2);
    if (correctIndex === -1) {
      return false;
      /* if the operation returns false, then we know we're done here because they arrays are not matching. */
    }
    /* if we do find it then we remove that from the array */
      console.log(arr2);
      // here we can see the array shrink in each iteration.
    arr2.splice(correctIndex, 1);
  }

  return true;
  // return false
}

console.log(same(arr, arr2));

/* this is considered O(n2) because of the embedded for loop that we have happening */
