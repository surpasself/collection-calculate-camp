'use strict';
function word(i){
  let k,j,n,m,words;

  k=i/26;
  j=i%26;
  if(j===0){
    k--;
    j=26;
  }
  n=String.fromCharCode(k+96);
  m=String.fromCharCode(j+96);
  if (k<1) {

    words=m;
  }
  else {
    words=n.concat(m)
  }
  return words;
}
function median_to_letter(collection) {

  let arr_Num = collection.sort();
  if((arr_Num.length + 1)%2 === 0){
    return word(Math.round(arr_Num[(arr_Num.length-1)/2]));
  }else {
    return word(Math.round((arr_Num[(arr_Num.length)/2-1]+arr_Num[(arr_Num.length)/2])/2));
  }

}

module.exports = median_to_letter;
