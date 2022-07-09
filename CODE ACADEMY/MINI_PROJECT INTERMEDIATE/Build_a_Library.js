//Build a Library
//Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.


class Media {
  constructor(title) {
    this._title = title; 
  }

    
}


class Book extends Media {
  constructor(title,author,pages){
    super(title);
    this._author = author;
    this._title = title;
    this._pages = pages;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  getAverarageRating() {
    const sum_rating = (a , b) => a + b;
    return this._ratings.reduce(sum_rating) / this._ratings.length; 
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(add_rating) {
    this._ratings.push(add_rating);
  }
  get author() {
    return this._author;
  }
  get title() {
    return this._title;
  }
  get pages() {
    return this._pages;
  }
  // get ratings() {
  //   return this._ratings;
  // }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(check) {
    this._isCheckedOut = check;
  }
}

class Movie extends Media {
  constructor(title, director,runTime) {
    super(title);
    this._director = director;
    this._title = title;
    this._runTime = runTime;
    this._ratings = [];
    this._isCheckedOut = false;
    }
  getAverarageRating() {
    const sum_rating = (a , b) => a + b;
    return this._ratings.reduce(sum_rating) / this._ratings.length; 
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(add_rating) {
    this._ratings.push(add_rating);
  }
  get director() {
     return this._director;
  }
  get title() {
    return this._title;
  }
  get runTime() {
    return this._runTime;
  }
  get ratings() {
    return this._ratings;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(check) {
    this._isCheckedOut = check;
  }

}

class CD extends Media {
  constructor(  title , artist , songs ) {
    super(title);
    this._artist = artist;
    this._title = title;
    this._song = songs;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  getAverarageRating() {
    const sum_rating = (a , b) => a + b;
    this._ratings.reduce(sum_rating) / this._ratings.length; 
  }
  toggleCheckOutStatus() {
     this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(add_rating) {
    this._ratings.push(add_rating);
  }
  addSong(add_song) {
    this._song.push(add_song);
  }
  shuffle() {
    return this._song[Math.floor(Math.random() * this._song.length)]
  }
  get artist() {
    return this._artist;
  }
  get title() {
    return this._title;
  }
  get song() {
    return this._song;
  }
  get ratings() {
   return this._artist;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(check) {
    this._isCheckedOut = check; 
  }
}

//Instance Book
const historyOfEverything = new Book('A Short History of Nearly Everything' , 'Bill Bryson',544);
historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);//true
//push addrating
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
//call getAverageRating
console.log(historyOfEverything.getAverarageRating());

//Instance Movie
const speed = new Movie('Speed' , 'Jan de Bont' , 116);
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut);//true

//getAverageRating
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
//call rating
console.log(speed.ratings)//[ 1, 1, 5 ]
//call resultgetAverageRating
console.log(speed.getAverarageRating())


////Instance CD
const random_CD = new CD('What are you doing' , 'peterpan' , ['biarlah' , 'sahabat' , 'discolazy time'])
// random_CD.addSong(['biarlah' , 'sahabat' , 'discolazy time']) , can use if this._song become empty array
console.log(random_CD.song);
//call shuffle
const shuffle = random_CD.shuffle()
console.log(shuffle);