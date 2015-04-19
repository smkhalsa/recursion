// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return '{}';
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      // if object is array
      var results = [];
      for (var i=0; i<obj.length; i++) {
        results[i] = stringifyJSON(obj[i]);
      }
      return '[' + results.join(', ') + ']';
    } else {
      // if object is non-array object
      var newObj = {};
      for (var key in obj) {
        newObj[key] = stringifyJSON(obj[key]);
      }
    }
  }
};
