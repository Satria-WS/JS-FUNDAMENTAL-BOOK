<!DOCTYPE html>
<html>
  <body>

<form>
ZIP:<br>
<input type="text" id="zip" onBlur="fillCity();"><br>
City:<br>
<input type="text" id="city">
</form>

  <script>

 function fillCity() {
 var cityName;
 var zipEntered = document.getElementById("zip").value;
 switch (zipEntered) {
 case "60608" :
 cityName = "Chicago";
 break;
 case "68114" :
 cityName = "Omaha";
 break;
 case "53212" :
 cityName = "Milwaukee";
 default:
 cityName = "data not found";
 }
 document.getElementById("city").value = cityName;
}
  </script>

  </body>
</html>

