/* @ Stephen O'Connor */
// immediately invoked anonymous function
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
   }, diff = function (x, y)
   {
      return x - y;
   };

   var sumResult = calculator.calculate(1, 2, sum),
           diffResult = calculator.calculate(1, 2, sum);

   console.log(sumResult);
   console.log(diffResult);

}());