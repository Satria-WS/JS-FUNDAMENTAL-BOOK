//loggerA is a property that uses arrow notation , Since data does not exist in the global context, accessing this.data returns undefined.
//loggerB uses method syntax. Since this refers to the enclosing object, the value of the data property is accessed as expected, returning "abc".

const myobj = {
  data: "ABC" ,
  loggerA: () => {console.log(this.data);},
  loggerB() {console.log(this.data)},
};

myobj.loggerA(); //undefined
myobj.loggerB(); //ABC
