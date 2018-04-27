'use strict';
var calculate_median = function(collection){

  if((collection.length + 1)%2 === 0){
    return collection[(collection.length-1)/2]
  }else {
    return Math.round((collection[(collection.length)/2-1]+collection[(collection.length)/2])/2)
  }

};
module.exports = calculate_median;
