'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码npm
  var i ,collection_a=[];
  if (number_a <= number_b) {
    for (i = number_a; i <= number_b; i++) {
      if (i%2==0){
        collection_a.push(i);
    }
  }
  }

  else
    {
      for (i = number_a;i>= number_b;i--) {
        if (i%2==0){
          collection_a.push(i);
         }
      }
    }
  return collection_a;
}

module.exports = get_integer_interval_2;
