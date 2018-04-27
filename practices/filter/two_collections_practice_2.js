'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  function common(value) {
    var j;
    return value !==collection_b[i]
  }
  let i=0,k;
  k=collection_a.filter(common);
  for (i=1;i<=collection_a.length-collection_b.length-1;i++) {
    k=k.filter(common);
  }
  return k;
}


module.exports = choose_no_common_elements;
