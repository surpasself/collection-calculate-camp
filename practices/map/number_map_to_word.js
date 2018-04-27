'use strict';
var number_map_to_word = function(collection){
function word(i){
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
  let i,m,n,k,j,words,result=[];
  result=collection.map(word);

  return result;
};

module.exports = number_map_to_word;
