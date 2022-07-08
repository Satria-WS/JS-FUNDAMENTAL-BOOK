//##Kind of Higher order function
/* 
- Array.map()
- Array.filter()
- Array.reduce()
*/

//##Array.map()
//loop with return new array
let numbers = [1, 2, 3, 4, 5, 6, 7];
let add = (value) => {
  return value + 1;
  // console.log(value);
};
let copy = numbers.map(add);
// console.log(copy);

//##Similar oldway
//note , execute code with return . cannot for loop
for (let i = 0; i < numbers.length; i++) {
  // return numbers;
  // console.log(numbers[i]);
}

//##My way
let old = numbers.map((value) => value + 1);
// console.log(old);

//##array.filter()
//make new array , and filter new value
//## my way
let numberFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findNumber = function () {
  let copy = numberFilter.filter((value) => {
    return value % 2 !== 0;
  });
  return copy;
};
console.log(findNumber());

//## filter way on object
const orang = [
  { name: "Sultan", umur: 16 },
  { name: "joni", umur: 18 },
  { name: "mark", umur: 27 },
  { name: "back", umur: 14 },
  { name: "Tone", umur: 24 },
];

function permit18(orang) {
  const filterOrang = orang.filter((value) => {
    return value.umur >= 18;
  });
  return filterOrang.map((value) => value.name);
}
console.log(permit18(orang));

//##reduce
//return single output
//take 2 parameter callback dan initialValue (optional)

let numberReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copyReduce = numberReduce.reduce((acc, value) => {
  return acc + value;
});
console.log(copyReduce); //55

const addCart = [
  {
    produk: "Indomie Mie Goreng",
    harga: 2500,
  },
  {
    produk: "Aqua Gelas",
    harga: 500,
  },
  {
    produk: "Sepatu Sport",
    harga: 75000,
  },
];

const totalHarga = addCart.reduce((accumulator, object) => {
  return accumulator + object.harga ;
} ,0);

console.log(totalHarga);





//refrence: https://gading.dev/id/blog/mengenal-higher-order-function-di-javascript
// console.log(new Date().getFullYear()); //2022
