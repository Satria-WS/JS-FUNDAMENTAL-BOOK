//Requiring a module in Node isn’t that complicated of a concept.
const config = require('/path/to/file');



/*
Resolving: To find the absolute path of the file.
Loading: To determine the type of the file content.
Wrapping: To give the file its private scope. This is what makes both the require and module objects local to every file we require.
Evaluating: This is what the VM eventually does with the loaded code.
Caching: So that when we require this file again, we don’t go over all the steps another time.
 */

//create directory using terminal: mkdir ~/learn-node && cd ~/learn-node


