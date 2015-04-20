// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName;

window.onload = function() {


  getElementsByClassName = function(className) {
    var node = document.body;
    var results = [];
    return getElementsByClassNameHelper(className,results, node)
  };

  var getElementsByClassNameHelper = function(className, results, node){
    // your code here
    if (node.classList.contains(className)) {
      results.push(node);
    }
    if (node.hasChildNodes()) {
      for (var i=0; i<node.children.length; i++) {
        node = node.children[i];
        getElementsByClassNameHelper(className, results, node);
      }
    }
    return results;
  };
  console.log('My function returns ', getElementsByClassName("mocha"));
  console.log('The built-in function returns ', document.getElementsByClassName("mocha"));
};
