<!DOCTYPE html>
<html>
<body>

<form onSubmit="checkAddress('email');">
Email:
<input type="text" id="email">
<input type="submit" value="Submit">
</form>

<script>
function checkAddress(fieldId) {
  if (document.getElementById(fieldId).value === "") {
  alert("Email address required.");
  
  }
 }
 
 </script>

</body>
</html>
