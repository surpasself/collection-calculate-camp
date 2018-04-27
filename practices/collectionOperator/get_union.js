'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result=[],i,j;

  for (i=0;i<collection_a.length;i++) {
    result.push(collection_a[i]);
  }
  for (i=0;i<collection_a.length;i++) {
    j=collection_a.includes(collection_b[i]);
     if (!j){
       result.push(collection_b[i]);
     }
  }
   return result;
 }

module.exports = get_union;

