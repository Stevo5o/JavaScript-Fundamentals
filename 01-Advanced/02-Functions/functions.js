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

   // utiltiy object with mehtod
   // called once less memory
   // anonoymous self invoking function   
   var utility = (function ()
   {
      var i = 0;
      // return a value to utility
      return {
         // a method
         nameGen: function ()
         {
            // create a closeure
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