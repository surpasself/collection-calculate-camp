function collect_same_elements(collection_a, collection_b) {
  Array.intersect = function(arr1, arr2) {
    if(Object.prototype.toString.call(arr1) === "[object Array]"
      && Object.prototype.toString.call(arr2) === "[object Array]") {
      return arr1.filter(function(v){
        return arr2.indexOf(v)!==-1
      })
    }
  }
  return Array.intersect(collection_a,collection_b);


}

module.exports = collect_same_elements;
