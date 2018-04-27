'use strict';
var is_exist_element = function(collection_a,element){
let arr;
arr=collection_a.filter((item,index)=>{
  if(index%2===0){
    return item;
  }
});
  if(arr.includes(element)){
  return true;
  }else return false;
};
module.exports = is_exist_element;
