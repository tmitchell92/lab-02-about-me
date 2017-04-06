'use strict';
var name = prompt('What is your name?')
var num_correct = 0
console.log('Here we go');
function fun_pizza(){ var pizza = prompt('Do I like pineapple on pizza?');
if (pizza.trim().toLowerCase() == 'yes' || pizza.trim().toLowerCase() == 'y')
{
  alert('Good job!');
  num_correct= num_correct+ 1
}
else {
  alert('BZZZT');
}
console.log('Do I like pineapple on pizza? '  + pizza)
}
fun_pizza();
function fun_drink(){var drink = prompt('Do I like to drink Long Island Ice Teas?');
if (drink.trim().toLowerCase() == 'yes' || drink.trim().toLowerCase() == 'y')
{
  num_correct= num_correct+ 1
  alert('Correct.');
}
else {
  alert('Try again.');
}
console.log('Do I like to drink Long Island Ice Teas? '  + drink)
}
fun_drink();
function fun_code(){var code = prompt('Do I enjoy coding?');
if (code.trim().toLowerCase() == 'yes' || code.trim().toLowerCase() == 'y')
{
  num_correct= num_correct+ 1
  alert('Yes, so far I do.');
}
else {
  alert("I'm sorry, that is incorrect.");
}
console.log('Do I enjoy coding? '  + code)
}
fun_code();
function fun_height(){var height = prompt('Am I over 6 feet tall?');
if (height.trim().toLowerCase() == 'yes' || height.trim().toLowerCase() == 'y')
{
  alert('A couple of couple of inches too short.');
}
else {
  num_correct= num_correct+ 1
  alert("Good guess.");
}
console.log('Am I over 6 feet tall? '  + height)
}
fun_height();
function fun_contacts(){var contacts = prompt('Do I wear contacts');
if (contacts.trim().toLowerCase() == 'yes' || contacts.trim().toLowerCase() == 'y')
{
  num_correct= num_correct+ 1
  alert('Yes, since the age of 11.');
}
else {
  alert('Saving up for that Lasik.');
}
console.log('Do I wear contacts? '  + contacts);
}
fun_contacts();
var fav_num = 7;
var stop = true;
function fun_num(){for(var i = 0; i < 4 && stop==true; i++)
{
  console.log(i);
  var guess = prompt('What is my favorite number?');
  guess = parseInt(guess);
  if (guess === fav_num){
    stop=!stop;
    alert('Correct!');
    num_correct= num_correct+ 1
  }
  else if (guess < fav_num){
    alert('too low');
  }
  else if (guess > fav_num){
    alert('too high');
  }
  else if(i===3)
  {
    alert('You are out of guesses');
  }
}
}
fun_num();
var fav_Poke = ['gengar','bulbasuar','charizard','scyther'];
var end = true;
function fun_poke(){for(var i=6; i > 0 && end; i--)
{
  var poke_guess= prompt('What is my favorite Pokemon?');
  poke_guess.trim().toLowerCase();

  if (poke_guess === fav_Poke[0] || poke_guess === fav_Poke[1] ||poke_guess === fav_Poke[2] || poke_guess === fav_Poke[3]){
    num_correct= num_correct+ 1;
    alert('Congrats, ' + 'the correct answers are one of these: ' + fav_Poke);
    end = false;
  }
  else if(i === 1){
    alert('Sorry but you have used all of your guesses, the correct answers is one of the following: ' + fav_Poke);
    end = false;
  }
}
}
fun_poke();
console.log(num_correct);
if (num_correct<7){
    alert('You got ' + num_correct + ' out of 7 correct, ' + name + ', try again for a perfect score.');
}
if (num_correct ===7){
  alert('You got ' + num_correct + ' out of 7 correct, ' + name + ', you got a perfect score!');
}
//
// }
