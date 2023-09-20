let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);

//let phrase = "JavaScript rocks!";
//console.log(phrase[phrase.length - 8]);

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);



let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);