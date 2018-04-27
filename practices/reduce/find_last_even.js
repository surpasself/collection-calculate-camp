'use strict';

function find_last_even(collection) {
  //在这里写入代码
  collection.reverse();
  var i;
  for (i=0;i<=collection.length-1;i++) {
    if (!(collection[i] % 2)) {
      break;
    }
  }
  return collection[i];
}

module.exports = find_last_even;
