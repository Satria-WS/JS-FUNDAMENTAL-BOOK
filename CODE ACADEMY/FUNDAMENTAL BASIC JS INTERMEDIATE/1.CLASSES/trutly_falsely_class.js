//#1
const a = true;
if(a === true) {
  console.log(false)
} else {
  console.log(true);
}



//#2
const value = true;
function bingung(_booleanProperty) {
 return  _booleanProperty = !_booleanProperty;
}
console.log(bingung("value: ",value));





//#3
var _booleanProperty = true;

if(_booleanProperty === true) {
  _booleanProperty = !_booleanProperty;
} else {
  console.log('tak ada');
}

console.log(_booleanProperty);//false