'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let i,result=[],j,k,n,m;
  if (number_a<=number_b){
    for (i = number_a ; i <= number_b ; i++) {
      k=i/26;
      j=i%26;
      if(j==0){
        k--;
        j=26;
      }
      n=String.fromCharCode(k+96);
      m=String.fromCharCode(j+96);
      if (k<1) {

        result.push(m);
      }
      else {
        result.push(n.concat(m))
      }
    }
    return result;
  }



  else {
    for (i = number_a ; i >= number_b ; i--) {
      k=i/26;
      j=i%26;
      if(j==0){
        k--;
        j=26;
      }
      n=String.fromCharCode(k+96);
      m=String.fromCharCode(j+96);
      if (k<1) {
        result.push(m);
      }
      else {
        result.push(n.concat(m))
      }
    }
    return result;
  }
}

module.exports = get_letter_interval_2;

