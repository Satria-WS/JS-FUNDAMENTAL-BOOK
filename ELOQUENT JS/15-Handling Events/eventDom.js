//## click event button  function
var button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log(" Hello Button");
});


var button = document.querySelector("button");
function once() {
  console.log("Done.");
  button.removeEventListener("click", once);
}
button.addEventListener("click", once);
