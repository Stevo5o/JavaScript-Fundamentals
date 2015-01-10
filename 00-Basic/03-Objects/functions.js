/* @ Stephen O'Connor */
// immediately invoked anonymous function
  (function() {
     
      button = document.getElementById('btn');
      input = document.getElementById('text_field');

      button.addEventListener('click', function()
      {
      	console.log('Clicked');
      });

      button.addEventListener('click', function()
      {
      	console.log('Other click listener');
      });
     
  }());

