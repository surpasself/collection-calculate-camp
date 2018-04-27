'use strict';
var single_element = function(collection){
  let arr,arr_object=[],no_repeat=[];
  arr=collection.filter((item,index)=>{
    if(index%2===1){
      return item;
    }
  });

  for (let i=0;i<arr.length;i++){
    if (!arr_object[arr[i]]){
      arr_object[arr[i]]={};//
      arr_object[arr[i]].key=arr[i];
      arr_object[arr[i]].count=1;
    } else{
     arr_object[arr[i]].count++;
    }
  }
    arr_object.filter((item)=>{
      if (item.count===1)
           no_repeat.push(item.key)}
       );
return no_repeat;
};
module.exports = single_element;
