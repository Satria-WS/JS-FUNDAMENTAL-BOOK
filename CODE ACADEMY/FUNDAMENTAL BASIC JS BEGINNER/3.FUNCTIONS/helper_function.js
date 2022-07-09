//Helper Functions #1
function multiplyByNineFifths(number) {
  return number * (9/5);
};
const z = multiplyByNineFifths(19);

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
//console.log(getFahrenheit(celsius)); // Returns 59
console.log(getFahrenheit(4));



//Helper Functions #2
function head(a , b ) {
  return a + b ;
}


function body(x , y , z) {
  return x * y * z;
    //return x , y , z
}

function footer(q , w , e ) {
  return q  - w - e;
}

function total(x1,x2,x3,x4) {
  return head(x1 , x2 , x3) + body(x1 , x2 , x3) + footer(x1 , x2 , x3) + x4
}
console.log(total(1,2,3,4)); // 9


//Helper function #3
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows,columns) {
  return monitorCount(rows, columns) * 200;
}
//console.log(costOfMonitors(1,2));

const totalCost = costOfMonitors(5,4)
console.log(totalCost);