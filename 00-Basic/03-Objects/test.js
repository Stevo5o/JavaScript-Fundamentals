/* @ Stephen O'Connor */
// immediately invoked anonymous function
( function () {

   function add( a, b )
   {
      return a + b;
   }
   var result = add( 2, 3 );

   console.log( result );

   var person = {
      name: "name",
      age: 0
   };
   
   console.log( person.name, person.age );

   person = function ( name, age )
   {
      this.name = name;
      this.age = age;
   };

   barry = new person( "Barry", 37 );
   stej = new person( "SteJ", 38 );
   console.log( barry.name, barry.age + '\n' +
           stej.name, stej.age + '\n' );
}() );

  