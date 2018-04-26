// add '.js' to all words on page that are the content of html elements. should be inserted with the defer attribute
// Javascript library for jsifying documents

// get all elements with content
var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT,
  { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
  false
);

var nodeList = [];

while(treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
// console.log(nodeList);

nodeList.forEach((item, index) => {
	var nv = item.nodeValue;
	var results = nv.match(/("[^"]+"|[^"\s]+)/g);
	new_values = [];
	if(results){
		results.forEach(function(item, index){
			new_values.push(item + ".js");
		});
		// console.log(new_values);
		// item.nodeValue = item.nodeValue + ".js";
		item.nodeValue = new_values.join(" ");
	}

});
console.log("Finished jsfying. You are welcome.");
