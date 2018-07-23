'use strict';

let arrayDouble = (array) => {
  if (array.length === 0) {
    return [];
  } else {
    let nextValue = arrayDouble(array.slice(1));
    return [array[0] * 2, ...nextValue];
  }
};

console.log(arrayDouble([2,4,6,7]));
