var d = new Date();
var currentMonth = d.getMonth();
var dayOfMonth = d.getDate();
var currYr = d.getFullYear();

var currentHrs = d.getHours();
var currMins = d.getMinutes();
var currSecs = d.getSeconds();
var currMills = d.getMilliseconds();
var millsSince = d.getTime(); // Milliseconds since midnight , January 1 , 1970;
console.log(millsSince)