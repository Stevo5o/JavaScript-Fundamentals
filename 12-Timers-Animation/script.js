/* @ Stephen O'Connor */
(function () {

   var speed = 500,
           i = 0,
           doSomething = function () {
              console.log("doSomething() executed " + (i + 1) + " times");
              i = i + 1;

              if (i > 9) {
                 clearTimeout(timer);
              }
           };

   var timer = setInterval(doSomething, speed);
   
   // clearTimeout(timer);

   // alert("hello");

}());