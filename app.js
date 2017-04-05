'use strict';
//
// console.log('Here we go');
// var pizza = prompt('Do I like pineapple on pizza?');
// if (pizza.trim().toLowerCase() == 'yes' || pizza.trim().toLowerCase() == 'y')
// {
//   alert('Good job!');
// }
// else {
//   alert('BZZZT');
// }
// console.log('Do I like pineapple on pizza? '  + pizza)
//
// var drink = prompt('Do I like to drink Long Island Ice Teas?');
// if (drink.trim().toLowerCase() == 'yes' || drink.trim().toLowerCase() == 'y')
// {
//   alert('Correct.');
// }
// else {
//   alert('Try again.');
// }
// console.log('Do I like to drink Long Island Ice Teas? '  + drink)
//
// var code = prompt('Do I enjoy coding?');
// if (code.trim().toLowerCase() == 'yes' || code.trim().toLowerCase() == 'y')
// {
//   alert('Yes, so far I do.');
// }
// else {
//   alert("I'm sorry, that is incorrect.");
// }
// console.log('Do I enjoy coding? '  + code)
//
// var height = prompt('Am I over 6 feet tall?');
// if (height.trim().toLowerCase() == 'yes' || height.trim().toLowerCase() == 'y')
// {
//   alert('A couple of couple of inches too short.');
// }
// else {
//   alert("Good guess.");
// }
// console.log('Am I over 6 feet tall? '  + height)
//
// var contacts = prompt('Do I wear contacts');
// if (hapa.trim().toLowerCase() == 'yes' || hapa.trim().toLowerCase() == 'y')
// {
//   alert('Yes, since the age of 11.');
// }
// else {
//   alert('Saving up for that Lasik.');
// }
// console.log('Do I wear contacts? '  + contacts);
var fav_num = 7;
for(var i = 4; i > 0 || fav_num; i--)
{
  var guess = prompt('What is my favorite number?')
  guess = parseInt(guess)
  if (guess === fav_num){
    alert('Correct!')
    fav_num = false
  }
  else if (guess < fav_num){
    alert('too low')
  }
  else if (guess > fav_num){
    alert('too high')
  }
  else if(i===1)
  {
    alert('You are out of guesses')
  }
}
}
var fav_Poke = ['gengar','bulbasuar','charizard','scyther']
for(var i=6; i > 0 || fav_Poke; i--)
{
  var poke_guess= prompt('What is my favorite Pokemon?')
  poke_guess.trim().toLowerCase()
  if (poke_guess === fav_Poke){
    alert('Congrats')
    fav_color = false
  }
  else if( )
}
