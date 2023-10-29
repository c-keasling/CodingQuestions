// Write a function argumentsLength that returns the count of arguments passed to it.
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  //learned the .lenghts function and used it to return the lenghts of all the arguments passed through. I think this is useful when learning about what can be done with passing variables through functions with spread operators
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
