function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
    let arr = [],
      result = [];
    collection_a.forEach((item)=>{
      if(!arr[item]){
        arr[item] = {};
        arr[item].key = item;
        arr[item].count = 1;
      }else {
        arr[item].count++
      }
    });
    for(let key in arr){
      result.push(arr[key])
    }



  return result.map(//map不改变原始数组
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
