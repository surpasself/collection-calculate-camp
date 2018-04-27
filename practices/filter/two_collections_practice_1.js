'use strict';
function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  function common(value) {
      return value === collection_b[i]
  }
  let i=0,j,k;
  var result=collection_a.filter(common);
  for (i=1;i<=collection_b.length-1;i++) {
    k=collection_a.filter(common);
    j=k[0];
    result.push(j);}
  return result;

}

module.exports = choose_common_elements;
