//The maTh Object

function randomPointOrcircle(radius, number) {
  let angle = Math.random() * 2 * Math.PI;
  return ([{
    a: radius,
    b: radius
  }, { x: number * Math.cos(angle), y: number * Math.cos(angle) }])
}

console.log(randomPointOrcircle("hello", 9));