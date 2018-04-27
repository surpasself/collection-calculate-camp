'use strict';

function compute_average(collection) {
  //在这里写入代码
  let average,sum=0,i;
  for(i=0;i<=collection.length-1;i++){
    sum+=collection[i]
  }
  return sum/collection.length;

}

module.exports = compute_average;

