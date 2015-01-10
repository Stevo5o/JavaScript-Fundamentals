/* @ Stephen O'Connor */
// immediately invoked anonymous function
(function () {

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

   // basic object
   stej = {
      name: "SteJ",
      kills: ["Javascript", "Java", "Skipping"],
      "favorite color": "Purple"
   };

   stej["favorite color"] = "Black";

   console.log(stej.name);
   console.log(stej["favorite color"]);
}());

