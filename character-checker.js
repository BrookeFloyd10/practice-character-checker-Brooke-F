const input = require('readline-sync');

let userName = input.question("Welcome, what's your name? "); //asks for user name and stores the input as userName

console.log("Hello " + userName + "! I'd be happy to help you locate a character in a string by its indice. \n"); // greets and explains the funcionality of the program

let userSourceText = input.question("\nPlease enter the string you would like me to work with. \n"); // gets the string that we will be locating indices in
let userIndex = input.question("Great, now enter the index number you want to locate. \n"); // gets the index number that we will be locating

let foundIndex = userSourceText[userIndex]; // gets the character at the given index in the given string


console.log("'" + foundIndex + "' is the character located at the " + userIndex + " index in the string '" + userSourceText +  "'. " ); // returns the given index and the given string in a message to the user