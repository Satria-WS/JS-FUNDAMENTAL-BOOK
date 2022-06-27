//testing
//test runners.

function test(label, body) {
  if (!body()) console.log("this is my " + label);
  else console.log("this is not my " + label);
}

test("label", () => {
  return true;
});



test("dont convert case-less characters" , ()=> {
    return "􀟈􀠶􀢎􀰆􀯷".toUpperCase() == "􀟈􀠶􀢎􀰆􀯷";
})