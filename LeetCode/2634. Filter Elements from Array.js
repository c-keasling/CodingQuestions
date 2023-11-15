//2634. Filter Elements from Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArray = []; // start by making new array for output return
  for (let i = 0; i < arr.length; i++) {
    // Use a standard for loop to have access to the index
    if (fn(arr[i], i)) {
      //see bottom for comment

      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}; // Correctly call the fn function with arr[i] and index i  hint 2 helped In Javascript, there is the concept of "truthiness" and "falsiness". Values such as 0, undefined, null, and false are falsy. Most values are truthy: 1, {}, [], true, etc. In Javascript, the contents of if-statements don't need to be booleans. You can say "if ([1,2,3]) {}", and it's equivalent to saying 'if (true) {}".
