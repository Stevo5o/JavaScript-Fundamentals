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
      greet: function()
      {
         console.log("Hello, I am SteJ");
      }
   };

   // access a key with a space. string " "
   stej["favorite color"] = "Black";

   console.log(stej.name);
   console.log(stej["favorite color"]);
   console.log(stej["kills"].join(', '));
   stej.greet();
}());

