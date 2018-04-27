function count_same_elements(collection) {
  //在这里写入代码
//得到不重复元素种类
  let i,j;
  let result_c=[];
  let result=[];
  let k=[];
  for (i=0;i<=collection.length-1;i++) {
    j=result_c.includes(collection[i]);
    if (collection[i].length>1) {
      k=collection[i].split("-");
    }
    else if (!j&&(collection[i].length=1)) {
      result_c.push(collection[i]);
  }
  }
  //得到每种元素的个数
  for (i=0;i<=result_c.length-1;i++){
    result[i]=0;
    for (j=0;j<=collection.length-2;j++){
      if(collection[j]===result_c[i]){
        result[i]++;
      }
    }
  }
  result_c[i]=k[0];
  result[i]=Number(k[1]);
  //放入json数组对象中
  var arrayJson={'dataList':[]};
  for (i=0;i<=result_c.length-1;i++){
    arrayJson.dataList.push({'key':result_c[i],'count':result[i]})
  }
  return arrayJson.dataList;
}

module.exports = count_same_elements;
