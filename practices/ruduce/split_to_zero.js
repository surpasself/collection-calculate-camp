'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let i;
  let result=[];
  result[0]=number;
  function accAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
  }

  function accSub(number,interval){
    return accAdd(number,-interval);
  }
  for (i=1;number>0;i++){
    number=accSub(number,interval);
    result[i]=number;
  }
  return result;
}

module.exports = spilt_to_zero;
