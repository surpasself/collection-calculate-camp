'use strict';
var calculate_average = function(collection){
  let count = 0;
  let total = 0;
  collection.map((item)=>{
    if(item%2 === 0){
      total += item;
      count ++;
    }
  });
  return parseInt(total/count);
};
let even_group_calculate_average = function(collection){
//选出第偶个元素
  //选出其中偶数
  let arr;
  arr=collection.filter((item,index)=>{
    if ((index+1)%2===0){
      if(Number(item)%2===0){
        return  item
      }
    }
  });
  //按位数分类
  let obj = {};
  arr.forEach((item)=>{
    let len = item.toString().length;
    if(!obj[len]){
      obj[len] = [];
      obj[len].push(item)
    }else {
      obj[len].push(item)
    }
  });
  //求其平均数
  let result = [];
  for(let key in obj){
    result.push(calculate_average(obj[key]))
  }
  if(result.length===0){
    result.push(0);
  }
   return result;
};
module.exports = even_group_calculate_average;
