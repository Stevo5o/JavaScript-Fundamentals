/* @ Stephen O'Connor */
// immediately invoked anonymous function
(function ()
{
   // say hello with two arguments
   sayHello = function (name, greeting)
   {
      if (typeof name === 'undefined')
      {
         return 0;
      }
      if (typeof greeting === 'undefined')
      {
         greeting = "Hello";
      }
      console.log(greeting + " World! " + name);

      return name.length;
   };

   console.log(sayHello("StephCake", "Greetings"));

   console.log(sayHello("SteJ"));

   console.log(sayHello());

   var color = 'black';
   var number = 1;

   showColor = function ()
   {
      var color = 'green';

      // if o var keyward a global var is created
      shape = 'square';

      console.log('Function: ' + color);
      console.log('Function: ' + number);
      console.log('Function: ' + shape);
   };
   
   showColor();
   
   console.log('Global color', color);
   console.log('Global number ', number);
   console.log('Global shape ', shape);

   function myFunction() 
   {
      console.log('myFunction was called');
   };

   var callTwice = function(targetFunction)
   {
      targetFunction();
      targetFunction();
   };

   callTwice(myFunction);
}());