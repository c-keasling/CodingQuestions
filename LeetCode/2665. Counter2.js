// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

//     increment() increases the current value by 1 and then returns it.
//     decrement() reduces the current value by 1 and then returns it.
//     reset() sets the current value to init and then returns it.
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// create createCounter function that accepts an initial number value
var createCounter = function (init) {
  // Initialize a counter with the initial value
  let initialNum = init;

  // create increment function to increase the counter
  const increment = function () {
    return ++initialNum; // add one and return the updated counter
  };

  // create decrement function to decrease the counter
  const decrement = function () {
    return --initialNum; // minus one and return the updated counter
  };

  // create reset function to reset the counter to its initial value
  const reset = function () {
    return (initialNum = init); // Reset to the initial value
  };

  // Return an object with  the above functions create
  return {
    increment,
    decrement,
    reset,
  };
};


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
