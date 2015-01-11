/* @ Stephen O'Connor */
// immediately invoked anonymous function
(function () {

   // basic DOM access
   button = document.getElementById('btn');
   input = document.getElementById('text_field');

   button.addEventListener('click', function ()
   {
      console.log('Clicked');
   });

   button.addEventListener('click', function ()
   {
      console.log('Other click listener');
   });

   // basic object. key value pairs
   stej = {
      name: "SteJ",
      kills: ["Javascript", "Java", "Skipping"],
      "favorite color": "Purple",
      greet: function (name, mood)
      {
         name = name || "You";
         mood = mood || "good";

         console.log("Hello, " + name +
                 " I am " + this.name +
                 " and I am in a " + mood + " mood!");
      }
   };

   barry = {
      name: "Barry",
      // the same method correct behaviour
      greet: stej.greet
   };

   // access a key with a space. string " "
   stej["favorite color"] = "Black";

   console.log(stej.name);
   console.log(stej["favorite color"]);
   console.log(stej["kills"].join(', '));

   stej.name = "StephCake";

   // this will be bound to stej
   stej.greet();

   // this will be bound to barry
   barry["greet"]("Sean", "great");

   // this is incorrect, loses this, binding
   stejGreet = stej.greet;

   // calling the functon greet in stej
   stej.greet.call(barry);

   // using call method, function is an object. dynamic
   stejGreet.call({name: "Jim"}, "Darragh", "awful");

   // using apply method, uses array
   stej.greet.apply(barry, ["Darragh", "bad"]);

   args = ["John", "good"];
   // dynamicially apply an array
   stej.greet.apply(barry, args);

   // classes = prototype
   personPrototype =
           {
              name: 'Anonymous',
              greet: function (name, mood)
              {
                 name = name || "You";
                 mood = mood || "good";

                 console.log("Hello, " + name +
                         " I am " + this.name +
                         " and I am in a " + mood + " mood!");
              },
              species: 'Homo Sapien'
           };

   // this is a constructor
   function Person(name)
   {
      this.name = name;
   }
  
   Person.prototype = personPrototype;

   // create a new object
   stej = new Person("SteJ");
   barry = new Person("Barry");

}());

