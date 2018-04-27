'use strict';
var even_asc_odd_desc = function(collection){
  let arr_unodd,arr_odd;
  arr_unodd=collection.filter((item)=>{
    if ((item)%2===0){
         return item;
      }
  });
  arr_odd=collection.filter((item)=>{
    if ((item+1)%2===0){
      return item;
    }
  });
  arr_unodd.sort((a,b)=>{return a-b});
  arr_odd.sort((a,b)=>{return b-a});
  return arr_unodd.concat(arr_odd)



};
module.exports = even_asc_odd_desc;
