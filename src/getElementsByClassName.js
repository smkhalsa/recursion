// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



var getElementsByClassName = function (className) {
  var results = [];
  var node = document.body;
  return getElementsByClassNameHelper(className, results, node);
};

var getElementsByClassNameHelper = function (className, results, node) {
  if (node.classList.contains(className)) {
    results.push(node);
  }
  for (var key in node.childNodes) {
    if (node.childNodes[key].nodeType === 1) {
      getElementsByClassNameHelper(className, results, node.childNodes[key]);
    }
  }
  return results;
};
