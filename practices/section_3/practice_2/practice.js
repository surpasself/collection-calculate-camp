function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return collection_a.map(//map不改变原始数组
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
