var globalVar = "This is a global variable.";

var globalFunction = function (paramOne) {
   var localVar = "This is a local variable.";

   var localFunction = function () {
      var superLocalVar = "Hello, World!";
      var localVar = "override var";
      alert(superLocalVar);
      alert(paramOne);
      alert(globalVar);
      alert(localVar);
      alert(foo);
   };

   localFunction();
   alert(localVar);
};

globalFunction(2);

// scope in console
var x = 1;
console.log(x); // 1
function bar() {
   if (true) {
      var x = 2;
      console.log(x); // 2
   }
}
bar();
console.log(x); // 1

var x = 1;
console.log(x); // 1
if (true) {
  var x = 2;
  console.log(x); // 2
}
console.log(x); // 2
