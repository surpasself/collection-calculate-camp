'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let count = 0;
  let total = 0;
  collection.map((item)=>{
    if(item%2 === 1){
      total += item;
      count ++;
    }
  });
  return total/count;
}

module.exports = average_uneven;
