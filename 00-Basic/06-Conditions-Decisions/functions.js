/* @ Stephen O'Connor */
(function ()
{
   // say hello with two arguments
   function sayHello(name, greeting)
   {
      if(typeof greeting === 'undefined')
      {
         greeting = "Hello";
      }
      console.log(greeting + " World! " + name);
   }

   sayHello("SteJ", "Greetings");
   
   sayHello("SteJ");

}());