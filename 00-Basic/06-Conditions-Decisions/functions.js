/* @ Stephen O'Connor */
(function ()
{
   // say hello with two arguments
   sayHello = function(name, greeting)
   {
      if(typeof name === 'undefined')
      {
         return 0;
      }
      if(typeof greeting === 'undefined')
      {
         greeting = "Hello";
      }
      console.log(greeting + " World! " + name);

      return name.length;
   };

   console.log(sayHello("StephCake", "Greetings"));
   
   console.log(sayHello("SteJ"));

   console.log(sayHello());

}());