// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

/**
 * @param {string} val
 * @return {Object}
 */
// Define a function 'expect' that takes a value 'val' as its parameter
function expect(val) {
  // The function returns an object with two methods: toBe and notToBe
  return {
    // 'toBe' method compares 'val' with 'anotherval' for equality
    toBe: function (anotherval) {
      // If 'val' is strictly equal to 'anotherval', return true
      if (val === anotherval) {
        return true;
      } else {
        // If not equal, throw an error with the message 'Not Equal'
        throw new Error("Not Equal");
      }
    },
    // 'notToBe' method checks if 'val' is not equal to 'anotherval'
    notToBe: function (anotherval) {
      // If 'val' is not strictly equal to 'anotherval', return true
      if (val !== anotherval) {
        return true;
      } else {
        // If they are equal, throw an error with the message 'Equal'
        throw new Error("Equal");
      }
    },
  };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
