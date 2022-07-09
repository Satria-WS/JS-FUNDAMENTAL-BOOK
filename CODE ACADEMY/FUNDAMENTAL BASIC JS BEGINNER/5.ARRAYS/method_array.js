//Method changing an Array Elements
const cars = ["Mercedes" , "BMW" , "Volvo"];
cars[0] = "Tesla"; //changing element on index[0]
console.log(cars); //[ 'Tesla', 'BMW', 'Volvo' ]

//Method changing an Array Elements if overload space element
const bicycle = ["ferrari" , "BMW" , "gunung"];
bicycle[4] = "carvil"; //[ 'ferrari', 'BMW', 'gunung', <1 empty item>, 'carvil' ]
bicycle[9] = "autobots"; // [ 'ferrari', 'BMW', 'gunung', <6 empty items>, 'autobots' ]
console.log(bicycle); 


//Method toString() , converts an array to a string of (comma separated) array values
var fruits = ["Banana", "Orange", "Apple", "Mango" , 1 , true];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(fruits.toString()); //Banana,Orange,Apple,Mango


//Method .join() , all array elements into a string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(fruits.join()); //Banana,Orange,Apple,Mango
console.log(fruits.join("")); //BananaOrangeAppleMango
console.log(fruits.join(" ")); //Banana Orange Apple Mango
console.log(fruits.join(" * ")); //Banana * Orange * Apple * Mango

//Method pop() method removed the last element from an array:
//The pop() can be stored in variable x;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); 
console.log(fruits); //[ 'Banana', 'Orange', 'Apple' ]
const x = fruits.pop();
console.log(x); //Apple
console.log(fruits);//[ 'Banana', 'Orange' ]


//Method push() method adds a new element to an array 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");// [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']
add_fruit = fruits.push("dragon fruit");
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'dragon fruit' ]

//Method shift(), method removes the the frst arrays element and "shifts" to lower index(index[0])
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruit = fruits.shift();
console.log(fruits);//[ 'Orange', 'Apple', 'Mango' ]

//Method unshift() method adds a new element to an array (at the beginning)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
add_fruit = fruits.unshift("Lemon");
console.log(add_fruit); // 5
console.log(fruits); //[ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]

//CHANGING ELEMENTS
//Method changing specific element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";//replace banana to kiwi
console.log(fruits); //[ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

//Method .length , for add on last elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
add_fruits = fruits[fruits.length] = "Kiwi";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//Method deleted 
//Using delete leaves undefind holes in the array
//use pop() or shift() insted
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item> ]

//Method splice() . method can be used to add new items to an array:
//first parameter ,defines the POSITION INDEX  in element fruits
//second parametes, defines HOW MANY elements should be removed , starting from element[0] on original fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 0 , "dragon-x")//dragon-x at position index[0] 
console.log(fruits);

//Method splice() can be used to remove elements
//can use splice() to remove elemtns without leaving holes int the array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(-1, 1); //postion index , HOW MANY element should be removed
console.log(fruits); //[ 'Banana', 'Orange', 'Apple' ]

var x =["get", "right", "the", "first", "time", "book" , "sleep"];
x.splice(2 , 3 , "know");
console.log(x);


//Method concat() , meerging(concatenating with another arrays)

//merging 1 string
//concat() method can also take strings as arguments
const girl = ["Emil", "Tobias", "Linus"];
const boy = girl.concat("Peter"); 
console.log(boy); //[ 'Emil', 'Tobias', 'Linus', 'Peter' ]

//merging 2 arrays 
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys); //merging two arrays 
console.log(myChildren); //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

//merging 3 arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const son = arr1.concat(arr2, arr3);
console.log(son);



//Slicing an Array
//Method slice() method creates a new array. It DOEST NOT REMOVE ANY ELEMENTS from the source arrays.
//.slice() will not mutate the array it was called on
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1); // store index[0] in new arrays
console.log(citrus); //[ 'Orange', 'Lemon', 'Apple', 'Mango' ]

//slices out a part of an arrays starting from arrays element from index[0]
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(citrus);

//can take twto argumnts like slice(1,3)
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); ////parameter1 = starting from index[0]  , parameter2 = total element of array fruits it stored
console.log(citrus);//[ 'Orange', 'Lemon' ]

//start slice  from index[0] to index[1];
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);//start slice  from index[0] to index[1]; remove 2 element the beginning of array
console.log(citrus); //[ 'Lemon', 'Apple', 'Mango' ]




//Method toString() , method returns an array as a comma separated string:
//automatically converts an array to a comma separated string when a primitive valie is expected
var fruits = ["Banana", "Orange", "Apple", "Mango"];
x = fruits.toString();
console.log(fruits)//[ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(x); //Banana,Orange,Apple,Mango


//Method toString() , method return a string representing the specified object
var x = new String("Hello World");
console.log(x); //[String: 'Hello World']
console.log(typeof(x)); //object

//Methode .indexOf() , method to find the index of the element
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);