'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let i,j;
  let result=[];
  for (i=0;i<=collection.length-1;i++) {
    j=result.includes(collection[i]);
    if (!j) {
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
