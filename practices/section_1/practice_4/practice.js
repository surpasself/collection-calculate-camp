function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_b=object_b.value,i;
  for (i=0;i<=collection_a.length-1;i++) {
    collection_a [i]= collection_a[i].key;
  }
    Array.intersect = function(arr1, arr2) {
      if(Object.prototype.toString.call(arr1) === "[object Array]"
        && Object.prototype.toString.call(arr2) === "[object Array]") {
        return arr1.filter(function(v){
          return arr2.indexOf(v)!==-1
        })
      }
    };
    return Array.intersect(collection_a,collection_b);
}

module.exports = collect_same_elements;
