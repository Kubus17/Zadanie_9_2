// scripts.js
var femaleNames = ['Joanna', 'Anna', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Jarek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log('Połączone tablice: ' + allNames);

var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
    var x = allNames.push(newName);
}
console.log('Po sprawdzeniu połączonych tablic dodałem imię Marian: ' + allNames);