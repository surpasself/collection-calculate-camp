'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
let i;
  collection_a.sort();
  collection_b.sort();
  for (i=0;i<=collection_b.length-1;i++){
    if (collection_a[i]===collection_b[i]){
      return true;
    }
  }
}

module.exports = compare_collections;


