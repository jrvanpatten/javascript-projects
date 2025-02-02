const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString = str.slice(0,3)
let secondString = str.slice(3,10)
let finalString = secondString.concat(newString);
console.log(finalString)
//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str} changed to ${finalString}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let info = input.question("How many letters will be relocated")
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if input.question("How many letters will be relocated") => 9 {
    console.log(`${str} changed to ${finalString} because you're selection was too high`);
} else {
   console.log(`${str} changed to ${str.slice(0,input)}`)
//