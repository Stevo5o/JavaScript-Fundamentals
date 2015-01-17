/* @ Stephen O'Connor */
( function () {

   x = [ 'some', 'extra', 'words', 'here' ];

   // create a string out of an array 
   result = x.join( ' ' );

   y = [ 'a string', 3, [ 'a sub array', 2, 3, 4 ], 'Stephen', function ( a, b ) {
         return a + b;
      } ];

   sentence = y[0];
   number = y[1];
   adder = y[4];
   console.log( "This is the adder function: " + adder( 10, 12 ) );

   y[1] = 144;
   new_num = y[1];

   // add to the end of the y array
   y[y.length] = "A new string";

   // remove and replace 
   y.splice( 2, 1, "Add this" );
   console.log( "splice: " + y );

   // adding two arrays
   z = x.concat( "adding two arrays:" + y );
   a = z.concat( "last item" );



   console.log( "This is x:" + x );
   console.log( y );
   console.log( z );
   console.log( a.toString() );

   // creates a new array, start end index
   result2 = a.slice( 1, 6 );

   console.log( result );

   var my_array = [ 2, 3, 4 ];
   console.log( my_array );

   // array methods
   // add to the right hand side of the array
   my_array.push( 5 );
   console.log( my_array.toString() );

   // remove from the right hand side of the array
   value = my_array.pop();
   console.log( my_array );

   // adds to the start, left hand side
   my_array.unshift( 1 );
   console.log( my_array.toString() );

   // removes from the start, left hand side
   value2 = my_array.shift();
   console.log( my_array );

   var my_array2 = [ 10, 44, 32, 100, 44, 3, 4 ];
   my_array2.sort( my_array2 );
   console.log( my_array2 );

   my_array2.sort( function ( a, b )
   {
      // return a - b;
      return Math.random() - 0.5;
   } );

   console.log( my_array2 );

   my_array.reverse();
   console.log( my_array );

   var numbers = [ 21, 39, 79, 49, 48, 29, 26, 66, 12, 61, 90, 49, 43 ];

   var dataGreaterThan50 = numbers.filter( function ( entry )
   {
      return entry > 50;
   } );

   document.getElementById( 'great50' ).innerHTML = dataGreaterThan50.join( '-' );

   // console.log(numbers.join('-'));

   document.getElementById( 'numbers' ).innerHTML = numbers.join( '-' );

   var donut =
           {
              key: 'Glazed',
              value: 132
           };

   // console.log( donut.key, donut.value );

   var donuts =
           [
              {
                 key: 'Glazed',
                 value: 132
              },
              {
                 key: 'Jelly',
                 value: 71
              },
              {
                 key: 'Holes',
                 value: 337
              },
              {
                 key: 'Sprinkles',
                 value: 93
              },
              {
                 key: 'Crumb',
                 value: 78
              },
              {
                 key: 'Chocolate',
                 value: 43
              },
              {
                 key: 'Coconut',
                 value: 20
              },
              {
                 key: 'Cruller',
                 value: 30
              },
              {
                 key: 'Éclair',
                 value: 8
              },
              {
                 key: 'Fritter',
                 value: 17
              },
              {
                 key: 'baerclaw',
                 value: 21
              }
           ];

   var dataGreaterThan50 = donuts.filter( function ( entry )
   {
      return entry.value > 50;
   } );

   console.log( 'dataGreaterThan50: ', dataGreaterThan50 );

   var reformattedDonuts = donuts.map( function ( entry )
   {
      return {
         donut: entry.key,
         qty: entry.value
      };
   } );

reformattedDonuts.forEach(function(entry)
{
   console.log(entry);
});
   // console.log(donuts[1]);

   // console.log( donuts[1].key, donuts[1].value );

   for ( var i = 0, len = donuts.length; i < len; i++ )
   {
      console.log( donuts[i].key, donuts[i].value );
   }

   donuts.forEach( function ( entry )
   {
      console.log( entry.key, entry.value );
   } );

   // document.getElementById( 'numbers' ).innerHTML = JSON.stringify(donuts);
   // document.getElementById( 'numbers' ).innerHTML = donuts[1].key, donuts[1].value;

}() );