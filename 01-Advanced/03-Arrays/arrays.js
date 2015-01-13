/* @ Stephen O'Connor */
// immediately invoked anonymous function
// new array methods
(function ()
{

   var calculator = {
      calculate: function (x, y, fn)
      {
         return fn(x, y);
      }
   };

   var sum = function (x, y)
   {
      return x + y;
   },
           diff = function (x, y)
           {
              return x - y;
           };

   var sumResult = calculator.calculate(1, 2, sum),
           diffResult = calculator.calculate(1, 2, diff);

   console.log(sumResult);
   console.log(diffResult);
   
   var fruit = ["apples", "oranges", "bananas", "grapes", "oranges"];
   
   var index = fruit.indexOf("oranges");
   var indexLast = fruit.lastIndexOf("oranges");
   
   console.log(index);
   console.log(indexLast);
   
   function isString(value, index, array)
   {
      return typeof value === "string";
   }
   
   // every = AND opertor
   console.log(fruit.every(isString));
   
   function isStringLetter(value, index, array)
   {
      return value[0] === "g";
   }
        
   // some = OR opertor
   result = fruit.some(isStringLetter);
   console.log(result);
   
   function isLengthOfOne(value, index, array)
   {
      return value.length === 1;
   }
   
   console.log(fruit.every(isLengthOfOne));
   
   function startWithAB(value, index, array)
   {
      return value[0] === "a" || value[0] === "b";
   }
   
   console.log(fruit.toString());
   console.log(fruit.filter(startWithAB).join(' & '));
   
   function doSomeThingEach(value, index, array)
   {
      console.log(value);
   }
   
   function doSomeThingMap(value, index, array)
   {
      return "I like " + value + "\n";
   }
   
   fruit.forEach(doSomeThingEach);
   console.log(fruit.map(doSomeThingMap).join(""));

   var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});

var cars = ["Toyota "]
   
}());