/* @ Stephen O'Connor */
(function () {

   var speed = 10,
           moveBox = function () {
              var zx = document.getElementById("box"),
                      left = zx.offsetLeft,
                      moveBy = 3;
              
              zx.style.left = left + moveBy + "px";
              
              if(left > 399) {
                 clearTimeout(timer);
              }
           };

   var timer = setInterval(moveBox, speed);

   // clearTimeout(timer);

   // alert("hello");

}());