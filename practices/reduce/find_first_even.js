'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var i;
  for (i=0;i<=collection.length-1;i++){
    if(!(collection[i]%2)){
      return collection[i];
    }
  }


}

module.exports = find_first_even;

