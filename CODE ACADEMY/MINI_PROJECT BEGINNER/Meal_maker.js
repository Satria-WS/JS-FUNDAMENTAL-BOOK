//Meal maker
const menu = {
  _courses : {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  
  //getter
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  //setter
  set appetizers(appetizer) {
    this._courses.appetizers.push(appetizer);
  },
  set mains(main) {
    this._courses.mains.push(main)
  },
  set desserts(dessert) {
    this._courses.desserts.push(dessert)
  },

  //module function
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
    name: dishName,
    price: dishPrice,
    };
    this._courses[courseName].push(dish); // push to nested loop
    //this[courseName] = dish;
    
   
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];

  },

  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');  

    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;
  },



};
menu.addDishToCourse('appetizers','salami', 12);
menu.addDishToCourse('mains','beef steak' , 120);
menu.addDishToCourse('desserts','creepe',23);

const meal = menu.generateRandomMeal();
console.log(meal);





