/*The statement above assigns the text string contained within the third paragraph of the
document to the variable contents.
An alternative to listing all the elements of a certain kind in the document is to narrow the
focus below the document level, for example to a div, and then make a collection within that
div.*/


var d = document.getElementById("div3");
var p = d.getElementsByTagName("p");
var contents = p[2].innerHTML;