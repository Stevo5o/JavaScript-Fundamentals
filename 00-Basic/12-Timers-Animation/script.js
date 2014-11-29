/* @ Stephen O'Connor */
(function () {

   var speed = 10,
           moveBox = function (moveBy) {
              var zx = document.getElementById("box"),
                      left = zx.offsetLeft;
              
                      if ((moveBy > 0 && left > 399) || (moveBy < 0 && left < 51)) {
                 clearTimeout(timer);
                 timer = setInterval(function () {
                    moveBox(moveBy * -1);
                 }, speed);
              }


              zx.style.left = left + moveBy + "px";

           };

   var timer = setInterval(function () {
      moveBox(3);
   }, speed);
   // clearTimeout(timer);

   // alert("hello");

}());