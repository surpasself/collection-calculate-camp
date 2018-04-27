'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let i,j,k=0,result=[],result_a=[];
 for (i=0;i<=collection_a.length-1;i++){
   for (j=0;j<=collection_b.length-1;j++){
     if (!(collection_a[i]%collection_b[j])) {
       result[k]=collection_a[i];
       k++;
     }
   }
 }
 return result;

}

module.exports = choose_divisible_integer;
