'use strict';
function grouping_count(collection) {
   let i,j,k;
   let result_a=[],result_c=[];
   let result=[];
     for (i=0;i<=collection.length-1;i++) {
      j=result_c.includes(collection[i]);
      if (!j) {
        result_c.push(collection[i]);//得到不重复元素种类
      }
    }

  for (i=0;i<=result_c.length-1;i++) {
      result[result_c[i]]=0;

          for (k = 0; k <= collection.length - 1; k++) {
               if (collection[k] === result_c[i]) {
                 result[result_c[i]]++;
               }
}
}
return result;
}

module.exports = grouping_count;
