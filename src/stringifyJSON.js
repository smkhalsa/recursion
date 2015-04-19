// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stepOne = function(obj) {
  // your code goes here
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return '';
  } else if (obj === null) {
    return obj;
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      // if object is array
      var newArr = [];
      for (var i=0; i<obj.length; i++) {
        newArr[i] = stepOne(obj[i]);
      }
      return '[' + newArr.join() + ']';
    } else {
      // if object is non-array object
      var stringObj = '{';
      var counter = 0;
      for (var key in obj) {
        if(stepOne(obj[key]) === "") {
          return "{}";
        } else {
          if(counter === Object.keys(obj).length-1) {
            stringObj += '"' + key + '":' + stepOne(obj[key]);
          } else {
            stringObj += '"' + key + '":' + stepOne(obj[key]) + ",";
            counter++;
          }
        }
      }
      stringObj += "}";
      return stringObj;
    }
  }
};

var stringifyJSON = function(obj) {
  return '' + stepOne(obj) + '';
};
