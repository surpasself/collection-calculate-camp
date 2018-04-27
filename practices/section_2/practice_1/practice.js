function count_same_elements(collection) {
  //在这里写入代码
//得到不重复元素种类
  let result=[];
  let arr=[];
  for (let i=0;i<collection.length;i++){
    if (!arr[collection[i]]){
      arr[collection[i]]={};//如果没有这个字母则创建一个新的对象
      arr[collection[i]].key=collection[i];
      arr[collection[i]].count=1;
    } else{
      arr[collection[i]].count++;
    }
  }
  for (let i in arr){
    result.push(arr[i])
  }

  return result;
}

module.exports = count_same_elements;
