'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var i, collection = [];
  if (number_a <= number_b) {
    for (i = number_a; i <= number_b; i++) {
      collection.push(i);
    }
  } else{
  for (i= number_a; i>= number_b; i--) {
    collection.push(i);
  }
  }
  return collection;
}

module.exports = get_integer_interval;

