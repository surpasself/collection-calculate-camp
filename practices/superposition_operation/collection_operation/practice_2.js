'use strict';
function oddNumber(value) {
  return value%2
}
function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(oddNumber).map((item)=>{
    return item*3+2;
  })
}

module.exports = hybrid_operation_to_uneven;

