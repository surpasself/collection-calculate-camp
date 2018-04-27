'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var i,result;
  i=collection.length;
  result=collection[i-1]
  return result;
}

module.exports = collect_last_element;
