function create_updated_collection(collection_a, object_b) {
  return collection_a.map(//map不改变原始数组
    (item)=>{
      if(object_b.value.indexOf(item.key) > -1){
        item.count--;
        return item;
      }else {
        return item
      }
    }
  );
}
module.exports = create_updated_collection;
