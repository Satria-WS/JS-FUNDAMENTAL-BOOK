const fs = require("fs");
const jokesFile = fs.readFileSync("./jokes.json");
//fs can be used to load pretty much any file, and not just text-based ones like JSON, so we need to tell it how the file is encoded.

console.log(jokesFile);
//<Buffer 5b 0a 20 20 7b 0a 20 20 20 20 22 63 61 74 65 67 6f 72 69 65 73 22 3a 20 5b 22 64 65 76 22 5d 2c 0a 20 20 20 20 22 63 72 65 61 74 65 64 5f 61 74 22 3a ... 788 more bytes>

const fs = require("fs");
const readFile = (path) => fs.readFileSync(path, "utf8");

const jokesFile1 = readFile("./jokes.json");
const jokes1 = JSON.parse(jokesFile1);

console.log(jokes1[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."

// the jokes.json file changes at some point

const jokesFile2 = readFile("./jokes.json");
const jokes2 = JSON.parse(jokesFile2);

console.log(jokes2[0].value); // "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."

// refrence https://www.freecodecamp.org/news/json-stringify-example-how-to-parse-a-json-object-with-javascript/
