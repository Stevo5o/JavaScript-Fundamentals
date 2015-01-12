/* @ Stephen O'Connor */
// immediately invoked anonymous function
  (function() {
            
     // function expression not hoisted
     doSomeThing = function()
     {
        var length = arguments.length; 
        console.log(arguments[1]);
        console.log("hello function declaration");
     };
     
     doSomeThing("Hello, World!", 2);
     
     doSomeThingElse = function()
     {
         arguments.callee();
     };
     
     // closure
     doSomeThingAgain = function(arg1)
     {
       // closure anonymous function
       return function()
       {
          console.log(arg1);
       };
     };
     
     fn = doSomeThingAgain("hello, closure");
     
     fn();
     
     var i = 0;
     function nameGen()
     {
        var name = "customName" + i;
        i = i + 1;
        return name;
     }
     
     var name = nameGen(),
      name2 = nameGen();
      
      console.log(name + " " + name2);
     
  }());