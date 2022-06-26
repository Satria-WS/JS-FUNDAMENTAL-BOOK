//## Higher-Order Functions
//Higher-Order function adalah fungsi yang beroperasi didalam fungsi lain
//higher-order function adalah fungsi yang menerima fungsi sebagai argumen atau mengembalikan nilai fungsi sebagai output
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
//create a function value on the spot instead
repeat(6, (l, j) => {
  labels.push(l);
});
repeat(4, console.log);
console.log(labels); //[ 0, 1, 2, 3, 4, 5 ]



