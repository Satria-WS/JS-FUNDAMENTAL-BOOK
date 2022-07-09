//The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}