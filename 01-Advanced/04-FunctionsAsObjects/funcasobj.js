/**
 * funcasobj.js Discription
 * @ Stephen O'Connor, 06-Feb-2015
 * 
 * Dependencies:
 * 
 */

// immediately invoked anonymous function
( function () {

   var calculate = function ()
   {
      Array.prototype.pop
      var fn = argumants.pop();
      return fn( x, y );
   };

   var obj =
           {
              name: "obj object",
              doSomthing: function ()
              {
                 console.log( this.name );
              }
           };

   var foo =
           {
              name: "foo object"
           };

   var bar =
           {
              name : "bar object"
           };
obj.doSomthing.apply(bar);
}() );