//## Higher-Order Functions

let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total); //55

//##callbackfunction
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
// repeat(4, console.log);
//## create a function value on the spot instead
repeat(6, (l, j) => {
  labels.push(l);
});
console.log(labels);



































