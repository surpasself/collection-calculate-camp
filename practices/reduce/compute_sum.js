'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  let sum;
  sum=collection.reduce(function (a, b) {
    return a + b;
  }, 0);
return sum;
}

module.exports = calculate_elements_sum;

