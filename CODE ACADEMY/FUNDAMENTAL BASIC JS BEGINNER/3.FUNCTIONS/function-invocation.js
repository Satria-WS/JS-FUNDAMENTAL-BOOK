function sempak(arg1,arg2) {
  this.firstName = arg1;
  this.lastName = arg2;

  return typeof(this.firstName);
}

const obj1 = sempak("johndoe" , "gg");
console.log(obj1);
console.log(typeof(sempak))//function
console.log(typeof(obj1))//string


const obj2 = new sempak("bangJago" , "gg");
console.log(obj2);
console.log(typeof(obj2))//object
