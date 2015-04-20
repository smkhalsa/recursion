// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

window.onload = function() {

  var node = document.body;
  var results = [];

  var getElementsByClassName = function(className){
    // your code here
    if (node.classList.contains(className)) {
      results.push(node);
    }
    if (node.hasChildNodes()) {
      for (var i=0; i<node.children.length; i++) {
        node = node.children[i];
        getElementsByClassName(className);
      }
    }
    return results;
  };
  console.log(getElementsByClassName("mocha"));
  console.log(document.getElementsByClassName("mocha"));
};
