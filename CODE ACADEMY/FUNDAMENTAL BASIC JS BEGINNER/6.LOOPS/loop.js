//For Loop
//for loop declares with three important pieces of information separated by smiconons ;
//initalization where to begin the loop
//stoping condition determines when to stop looping
//The iteration statement will be updated if the loop is completed
for (var i = 0 ; i < 10 ; i+= 1) {
  // console.log(i);
}

//for loop with break
for (let i = 0; i < 6; i += 1) {
  if(i == 4) {
    break;
  }
  // console.log(i);
}

//reverse loop
var items = ['apricot', 'banana', 'cherry'];
for (var i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
}


//Nested For Loop
for (let outer = 1; outer <= 4 ; outer++) {
  //console.log(outer + " - "+ outer);
  for (let inner = 1; inner <= 2; inner += 1) {
    console.log("This is nested loop -" + inner );
  }
}

//while loop 
//The loop will continue to run until the condition evaluates to false
var i ;
i = 1;

while(i <= 3) {
  //code block to be executed
  // console.log(i); //1-3
  i++;
}

//Do..While statement
//The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
var x = 0; //1 , 3 , 6 , 10 ,15 ,21
var i = 1; // 2 , 3 , 4 , 5 , 6 

do {
  x = x + i; // x+= i;
  console.log(x);
  i++;
} while (i <= 6);