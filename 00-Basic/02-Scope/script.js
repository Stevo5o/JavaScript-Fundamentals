//var globalVar = "This is a global variable.";
//
//var globalFunction = function (paramOne) {
//   var localVar = "This is a local variable.";
//
//   var localFunction = function () {
//      var superLocalVar = "Hello, World!";
//      var localVar = "override var";
//      alert(superLocalVar);
//      alert(paramOne);
//      alert(globalVar);
//      alert(localVar);
//      alert(foo);
//   };
//
//   localFunction();
//   alert(localVar);
//};
//
//globalFunction(2);
//
//// scope in console
//var x = 1;
//console.log(x); // 1
//function bar() {
//   if (true) {
//      var x = 2;
//      console.log(x); // 2
//   }
//}
//bar();
//console.log(x); // 1
//
//var x = 1;
//console.log(x); // 1
//if (true) {
//  var x = 2;
//  console.log(x); // 2
//}
//console.log(x); // 2
//var world = "World!";
//
//function sayHello()
//{
//   var hello = "Hello ";
//   
//   function inner()
//   {
//      var extra = " There is more!";
//      console.log(hello + world + extra);
//   }
//   
//   inner();
//}
//
//sayHello();
//
//console.log("world outside sayHello(): ", world);
////console.log("world outside sayHello(): ", hello);

//// shadowing
//var myColor = "blue";
//console.log("myColor before myFunc", myColor);
//
//function myFunc()
//{
//   var myColor = "yellow";
//   var myNumber = 42;
//   console.log("myColor inside myFunc", myColor);
//}
//
//myFunc();
//console.log("myColor after myFunc", myColor);
////console.log("myColor after myFunc", myNumber);
//
//document.write("This is a sentence", "<br>");

// hoisting
function doSomething(doit)
{
   var color = "blue";
   if(doit)
   {
      color = "red";
      console.log("Color in if(){}", color);
   }
   
   console.log("Color after if(){}", color);
}

doSomething(false);
doSomething(true);