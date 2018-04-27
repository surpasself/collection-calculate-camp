function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let i,j;
  let result_c=[];
  let result=[];
  let k=[];
  for (i=0;i<=collection_a.length-1;i++) {
    j=result_c.includes(collection_a[i]);
    if (collection_a[i].length>1) {
      k=collection_a[i].split("-");
    }
    else if (!j&&(collection_a[i].length=1)) {
      result_c.push(collection_a[i]);
    }
  }
  //得到每种元素的个数
  for (i=0;i<=result_c.length-1;i++){
    result[i]=0;
    for (j=0;j<=collection_a.length-2;j++){
      if(collection_a[j]===result_c[i]){
        result[i]++;
      }
    }
  }
  result_c[i]=k[0];
  result[i]=Number(k[1]);
  //放入json数组对象中
  let arrayJson={'dataList':[]};
  for (i=0;i<=result_c.length-1;i++){
    arrayJson.dataList.push({'key':result_c[i],'count':result[i]})
  }
  return arrayJson.dataList.map(//map不改变原始数组
    (item)=>{
      if(object_b.value.indexOf(item.key) > -1){
        if(item.count>=3){
          let i=parseInt(item.count/3);
          item.count-=i;
        }
        return item;
      }else {
        return item
      }
    }
  );
}

module.exports = create_updated_collection;
