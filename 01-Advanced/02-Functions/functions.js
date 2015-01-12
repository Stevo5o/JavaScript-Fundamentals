/* @ Stephen O'Connor */
// immediately invoked anonymous function
(function () {

   // function expression not hoisted
   doSomeThing = function ()
   {
      var length = arguments.length;
      console.log(arguments[1]);
      console.log("hello function declaration");
   };

   doSomeThing("Hello, World!", 2);

   doSomeThingElse = function ()
   {
      arguments.callee();
   };

   // closures
   doSomeThingAgain = function (arg1)
   {
      // closure anonymous function
      return function ()
      {
         console.log(arg1);
      };
   };

   fn = doSomeThingAgain("hello, closure");

   fn();

   var utility = (function ()
   {
      var i = 0;
      
      return {
         
         nameGen: function()
         {
            var name = "customName" + i;
            i++;
            return name;
         }
      }
   }());


   var name = utility.nameGen(),
           name2 = utility.nameGen();

   console.log(name + " " + name2);

}());