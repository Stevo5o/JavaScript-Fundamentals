/* @ Stephen O'Connor */
// JS handles octal decimal hexidecimal
// Operator precedence https://developer.mozilla.org/en/Javascript/Reference/Operators/Operator_Precedence
(function () {

   var a = 0.1;
   var b = 0.2;

   result = a * b;

   largeN = 1.23E16; 
   
   // octal number 0-7. 10
   h = 012;

   // hex number 15
   i = 0xf

   j = parseInt("0197", 10);
   k = parseInt("010111", 2);

   // get a number out of a string base 10
   l = parseInt("23 people", 10);

   // console.log(isNaN(l));

   // get a float out of a string base 10
   m = parseFloat("123.456 is a strange number");

   console.log(1 === parseInt("1", 10));
   
   if (1 < 2)
   {
      console.log("Yes");
   }
   else
   {
      console.log("No");
   }
   
   n = Math.round(Math.random() * 10);
   o = Math.round(2.6);
   p = Math.floor(3.7);
   q = Math.ceil(6.2);
   
   y = Math.pow(2, 5);
   z = Math.round(Math.sqrt(5));  
   

}());