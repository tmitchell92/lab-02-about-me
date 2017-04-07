'use strict';
var name = prompt('What is your name?')
var numCorrect = 0
console.log('Here we go');
function funPizza(){ var pizza = prompt('Do I like pineapple on pizza?');
if (pizza.trim().toLowerCase() == 'yes' || pizza.trim().toLowerCase() == 'y')
{
  alert('Good job!');
  numCorrect++
}
else {
  alert('BZZZT');
}
console.log('Do I like pineapple on pizza? '  + pizza)
}
funPizza();
function funDrink(){var drink = prompt('Do I like to drink Long Island Ice Teas?');
if (drink.trim().toLowerCase() == 'yes' || drink.trim().toLowerCase() == 'y')
{
  numCorrect++
  alert('Correct.');
}
else {
  alert('Try again.');
}
console.log('Do I like to drink Long Island Ice Teas? '  + drink)
}
funDrink();
function funCode(){var code = prompt('Do I enjoy coding?');
if (code.trim().toLowerCase() == 'yes' || code.trim().toLowerCase() == 'y')
{
  numCorrect++
  alert('Yes, so far I do.');
}
else {
  alert("I'm sorry, that is incorrect.");
}
console.log('Do I enjoy coding? '  + code)
}
funCode();
function funHeight(){var height = prompt('Am I over 6 feet tall?');
if (height.trim().toLowerCase() == 'yes' || height.trim().toLowerCase() == 'y')
{
  alert('A couple of couple of inches too short.');
}
else {
  numCorrect++
  alert("Good guess.");
}
console.log('Am I over 6 feet tall? '  + height)
}
funHeight();
function funContacts(){var contacts = prompt('Do I wear contacts');
if (contacts.trim().toLowerCase() == 'yes' || contacts.trim().toLowerCase() == 'y')
{
  numCorrect++
  alert('Yes, since the age of 11.');
}
else {
  alert('Saving up for that Lasik.');
}
console.log('Do I wear contacts? '  + contacts);
}
funContacts();
var favNum = 7;
function funNum(){
  for(var tries=4; tries > 0; tries--){
    var numberGuess = prompt('What is my favorite number?');
    numberGuess = parseInt(numberGuess);
    if (numberGuess === favNum){
      tries=0;
      alert('Correct!');
      numCorrect++}
      else if (numberGuess < favNum){
        alert('too low');}
        else if (numberGuess > favNum){
          alert('too high');}
          else{
            alert('That is not a number.');
          }
        }
      }
      funNum();
      var favPoke = ['gengar','bulbasuar','charizard','scyther'];
      var tries, pokeGuess, i;
      var userWon = false;
      function funPoke(){
        for(tries=6; tries > 0 && !userWon; tries--){
          pokeGuess= prompt('What is my favorite Pokemon?');
          pokeGuess.trim().toLowerCase();

          for (i=0; i < pokeGuess.length; i++){
            if(pokeGuess === favPoke[i]){
              alert('Congrats, thats right.');
              userWon = true;
            }
          }
          if (!userWon){
            alert('Try again.');}
          }
        }
        funPoke();
        alert('The pokemon are ' + favPoke.join(', ') + '.');

        console.log(numCorrect);
        if (numCorrect<7){
          alert('You got ' + numCorrect + ' out of 7 correct, ' + name + ', try again for a perfect score.');
        }
        if (numCorrect ===7){
          alert('You got ' + numCorrect + ' out of 7 correct, ' + name + ', you got a perfect score!');
        }

      }
