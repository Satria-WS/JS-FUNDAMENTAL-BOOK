//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//#1
const decodedValue = ([color1, color2]) => {
  return parseInt(`${COLORS[color1]}${COLORS[color2]}`)
};
const COLORS = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
}
console.log(decodedValue(["brown" , "black"]))


////#2
const colorsCode = {
    black: '0',
    brown: '1',
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9"
}
 const decodedValues = (colors) => {
    return parseInt(colorsCode[colors[0]] + colorsCode[colors[1]]);
};

console.log(decodedValues(["orange" , "white" , "grey"]))