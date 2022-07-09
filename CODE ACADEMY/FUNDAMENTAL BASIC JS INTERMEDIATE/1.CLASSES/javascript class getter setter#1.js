// *** JS Class GETTER / SETTER (+split)
//#1
	class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        // getters => access properties
        // setters => change or mutate them
        get fullName() {
            return `Hello ${this.firstname} ${this.lastname}`;
        }
        set fullName(space) {
            const parts = space.split(' ');
            this.firstname = parts[0];
            this.lastname = parts[1];
        }
    }
    let run = document.getElementById("run");
    run.addEventListener('click', () => {
        let john = new Person('John', 'Connor');
        console.log(john.fullName);
        john.fullName = 'Billy Butcher';
        console.log(john.firstname + ' ' + john.lastname);
      	//console.log(`${john.firstname} ${john.lastname}`); same output
      // => has to be john.firstname otherwise undefined 
    }) 


    