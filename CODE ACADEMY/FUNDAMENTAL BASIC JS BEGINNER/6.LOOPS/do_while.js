//do while loop
//The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
//Statement #1
var i = 0;
do {
  console.log(i); // 0-4
  i++;
} while (i <= 4);


//Statement #2
var x = 0; //1 , 3 , 6 , 10 ,15 ,21
var i = 1; // 2 , 3 , 4 , 5 , 6 
do {
  x = x + i; // x+= i;
  console.log(x);
  i++;
} while (i <= 6);