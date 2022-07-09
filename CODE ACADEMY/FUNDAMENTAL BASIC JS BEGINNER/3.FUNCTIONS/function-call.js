const person = {
	fullname: function() {
	  if (this.nickname === undefined) {
	  	this.nickname = "guest";
	  }

	  return this.firstName + " " + "is" + " " + "gg " + this.nickname;
	},
	nickname:() => {
	  return this.nickName +  " " + "is" + " " +  "tole";
	}
}

const person1 = {
  firstName:"john"
}
const person2 = {
  firstName:"mario Tsubasa"
}

const person3 = {
	nickname: "tole"
}
const person4 = {
	nickname: "jack"
}

console.log(person.fullname.call(person1))
console.log(person.nickname.call(person2))

console.log(person.fullname.call(person4))

/*









*/

