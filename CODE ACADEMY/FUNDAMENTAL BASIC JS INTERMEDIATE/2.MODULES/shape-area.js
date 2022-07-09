/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below

function circleArea(radius) {
  return PI * radius * radius;
};
console.log(circleArea(3))

function squareArea(a) {
  return a * a;
};
// circleArea(PI , 4);
// squareArea(3);
module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;

