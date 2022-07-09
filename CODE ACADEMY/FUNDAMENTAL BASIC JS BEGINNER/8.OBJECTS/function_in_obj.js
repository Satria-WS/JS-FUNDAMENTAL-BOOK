//Js objects may have property values that are functions
//syntax: objectName.methodName(arguments)

const engine = {
//method shorthand, with one argument
//function delcaration
  start(adverb) {
    console.log(`This is ${adverb}`);
},
//function arrow with no argument
  finish: () => {
    console.log(`Iam finish my home work`);
  }
};

engine.finish();
engine.start("function declaration")