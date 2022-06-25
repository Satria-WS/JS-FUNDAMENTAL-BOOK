var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", tucson ", "
  Great Falls ",  "
  great falls ", "
  Honolulu ", "
  honolulu "
];

var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    alert("It's one of the cleanest cities");
  }
}