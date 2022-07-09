//Spread Operator #1
const citrus = ["Lime","Lemon" , "Orange"];
const fruits = ["Apple" , "Banana" , "Coconut", ...citrus];


console.log(...citrus); //Lime Lemon Orange
console.log(...citrus[1]); //L e m o n
console.log(...fruits);//Apple Banana Coconut Lime Lemon Orange
console.log(fruits);//[ 'Apple', 'Banana', 'Coconut', 'Lime', 'Lemon', 'Orange' ]


[car,hp,tas,mouse] = ["car" , "hp" , "tas", ["mouse" , "sarung", "samsu"]];
console.log(...car);
console.log(mouse); //[ 'mouse', 'sarung', 'samsu' ]
console.log(...mouse); //mouse sarung samsu



const Angka = [1,2,3,4,5];
console.log(...Angka)
for(var i = 0 ; i < Angka.length ; i++ ) {
  console.log(Angka[i]);

}

var i = 0;
var angkaHorizontal = [];
while(i < Angka.length) {
	//console.log(Angka[i])
	//angkavertical.push(Angka[i])
	angkaHorizontal += (Angka[i] + "" );
	i++;
}
console.log(angkaHorizontal);//12345
console.log(...angkaHorizontal);//1 2 3 4 5

//spread operator#2
console.log("\n")
const arrValue = ['My', 'name', 'is', 'Jack'];
console.log(...arrValue[0]);
console.log(arrValue);

var i = 0;
while(i < arrValue.length) {
   console.log(...arrValue[i]);
	i++;
}

// copy using spread syntax
let arr1 = [ 1, 2, 3];
let arr2 = [...arr1];
let arr3 = [arr1]
console.log(...arr1);//1 2 3
console.log(arr2);//[ 1, 2, 3 ]
console.log(arr3);//[ [ 1, 2, 3 ] ]
console.log(...arr3);//[ 1, 2, 3 ]

let arr4 = [1,2,3];
let arr5 = arr4;
console.log(...arr4)//1 2 3
console.log(arr5);//[ 1, 2, 3 ]



//spread operator#3
console.log("\n")
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2}
console.log(obj3); // { x: 1, y: 2, z: 3 }

const obj4 = { x : 2, y : 21 };
const obj5 = { z : 4 };
const obj6 = {obj4,obj5};
const obj7 = {...obj4,...obj5}
console.log(obj6);//{ obj4: { x: 2, y: 21 }, obj5: { z: 4 } }
console.log(obj7);//{ x: 2, y: 21, z: 4 }



//spread operator#4
console.log("\n")
const fullName = {
	fName : "James",
	lName: "Bond"
}

const lastName = {
	fName : "Jancok",
	lName: "xxx"
}

const user = {
	...fullName,
	fullName,
	id:1,
	usename : "cristianoROnaldo"
}

const fullNameLastName = {...fullName,...lastName};
console.log(fullName)//{ fName: 'James', lName: 'Bond' }
//console.log(...fullName);//error
console.log(..."Hello world");//H e l l o   w o r l d
console.log(...fullName.fName);//J a m e s
console.log(fullNameLastName);//{ fName: 'Jancok', lName: 'xxx' }

//console.log(...user)//error
console.log(user);


//spread operator#5
//rest parameter
console.log("\n")
var func = (...args)=> {
	console.log(args)
}

func(4) //[ 4 ]
func(citrus);   //[ [ 'Lime', 'Lemon', 'Orange' ] ]
func(...citrus);//[ 'Lime', 'Lemon', 'Orange' ]

var funcX = (args)=> {
	console.log(...args)
}

funcX([4]);//4
//func(10)//TypeError: Found non-callable @@iteratorat func (D:\My training skill\JAVASCRIPT\CODE ACADEMY\FUNDAMENTAL BASIC JS 
funcX(citrus); //Lime Lemon Orange
funcX(...citrus); //L i m e



const num1 = [1, 3, 4, 5];
function sum(x, y ,z) {
    console.log(x + y + z);
}
console.log(...num1);//1 3 4 5
//sum(...num1); // 8
sum(num1);//1,3,4,5undefinedundefined

console.log({
	name:"gg",
	id:3,
	material:22,
	sarung:"gajah",
	gelar:"33"

})


//spread operator#5
console.log("\n")
const event = {
	target:{
		name:"email",
		value:"asdfasf"
	}
};

const {name,value} = event.target;
console.log(name);//email
console.log(value);//asdfasf


const prevValue = {
	fName: "",
	lName: "",
	email: "",
}

console.log({
	prevValue,
	...prevValue,
	[name]:value,
	name:name,
});

console.log({
	...prevValue,
	[name[0]]:value,
	name:value
})
console.log([name]);//email

console.log("\n")
function abc(g={s:[4,3]},...h) {
  // return h;
  // return [h,[h],...[h]]
  // return {g:h};
  return [...h];
}

console.log(abc(3,5));
// console.log(abc(3,[4]));
// console.log(abc(3,...[4]));

let Li = [];
Li.push("array")
Li.push("array")
console.log(Li);

let Lu = [];
Lu += "arry";
Lu += "sarung";
console.log(Lu);