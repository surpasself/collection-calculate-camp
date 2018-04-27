'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  //先将所给数组完全颠倒，用indaxof找到第一次出现的正数的下标再用中长度减去

  collection.reverse();
  let i,long;
  long=collection.length;
  i=collection.indexOf(element);
  long=long-i-1;
  return long;

}

module.exports = calculate_elements_sum;
