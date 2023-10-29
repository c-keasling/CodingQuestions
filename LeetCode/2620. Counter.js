// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  // Store initial number inside createCounter to represents the starting number of the counter.
  let initialNum = n;
  
  // This inner function has access to 'initialNum' from the outer function's scope.
  return function () {
    // Declare a local variable returnNum in the inner function scope so that this inner function can return a number. On the first call it will equal initial number
    let returnNum = initialNum;
    
    // add one to initialNum to increase it for the next call.
    initialNum++;
    
    // The inner function returns the returnNum so that it matches the times it was called
    return returnNum;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
