'use strict';

console.log('Here we go');
var pizza = prompt('Do I like pineapple on pizza?');
if (pizza.trim().toLowerCase() == 'yes' || pizza.trim().toLowerCase() == 'y')
{
  alert('Good job!');
}
else {
  alert('BZZZT');
}
console.log('Do I like pineapple on pizza? '  + pizza)

var drink = prompt('Do I like to drink Long Island Ice Teas?');
if (drink.trim().toLowerCase() == 'yes' || drink.trim().toLowerCase() == 'y')
{
  alert('Correct.');
}
else {
  alert('Try again.');
}
console.log('Do I like to drink Long Island Ice Teas? '  + drink)

var code = prompt('Do I enjoy coding?');
if (code.trim().toLowerCase() == 'yes' || code.trim().toLowerCase() == 'y')
{
  alert('Yes, so far I do.');
}
else {
  alert("I'm sorry, that is incorrect.");
}
console.log('Do I enjoy coding? '  + code)

var height = prompt('Am I over 6 feet tall?');
if (height.trim().toLowerCase() == 'yes' || height.trim().toLowerCase() == 'y')
{
  alert('A couple of couple of inches too short.');
}
else {
  alert("Good guess.");
}
console.log('Am I over 6 feet tall? '  + height)

var hapa = prompt('Am I hapa?');
if (hapa.trim().toLowerCase() == 'yes' || hapa.trim().toLowerCase() == 'y')
{
  alert('Yup, half Korean, half white.');
}
else {
  alert("Nah, I'm hapa.");
}
console.log('Am I hapa? '  + hapa)
