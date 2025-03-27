'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const clArray = [...this];

    const sArray = clArray.toSorted(compareFunction);

    for (let i = 0; i < clArray.length; i++) {
      this[i] = sArray[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
