'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let i,j;
  let result=[];
  var flatten = require('array-flatten');
  collection=flatten(collection);
  for (i=0;i<=collection.length-1;i++) {
    j=result.includes(collection[i]);
    if (!j) {
      result.push(collection[i]);
    }
  }
  for(i=result.length-1;i>=0;i--){
    if(result[i-1]===result[i]){
      result.pop()
    }
  }
  return result;
}

module.exports = double_to_one;
