//const and let are block scoped variables, meening they are only accessible in their block

const isLoggedIn = true;

if (isLoggedIn == true) {
  var status_message = "User login"; //var is global variables
  const send_message = "user logout"; //const is block scoped variables
}
console.log(status_message);
console.log(send_message); //send_message is not defined