'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var flatten = require('array-flatten');
  return flatten(collection);
}

module.exports = double_to_one;
