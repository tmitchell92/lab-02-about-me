'use strict';

console.log('Here we go');
var pizza = prompt('Do you like pineapple on pizza?');
if (pizza.trim().toLowerCase() == 'yes' || pizza.trim().toLowerCase() == 'y')
{
  alert('Me too!');
}
else {
  alert('How do you live with yourself?');
}
