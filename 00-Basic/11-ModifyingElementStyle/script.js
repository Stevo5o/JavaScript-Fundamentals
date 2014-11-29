/* @ Stephen O'Connor */
(function () {

   var divFoo = document.getElementById("foo"),
           style = divFoo.style;

   // style.color = "blue";
   // style.border = "1px solid black";
   // style.backgroundColor = "yellow";
   // style.padding = "4px";

   divFoo.className = "css-class css-class2";
   // remove all classes
   // divFoo.className = divFoo.className.replace(" css-class2 ", "");

   // var color = window.getComputedStyle(divFoo, null).getPropertyValue("color");

   // var color = divFoo.currentStyle["color"];

   var getStyle = function (zx, cssProperty) {
      if (typeof getComputedStyle !== "undefined") {
         return window.getComputedStyle(zx, null).getPropertyValue(cssProperty);
      } else {
         return zx.currentStyle[cssProperty];
      }
   };

   // use classList instead of className
   // divFoo.classList.add("css-class");
   // divFoo.classList.remove("css-class");
   // divFoo.classList.toggle("css-class");
   // divFoo.classList.toggle("css-class");


   var color = getStyle(divFoo, "color");
   alert(color);
   
   // alert(style.color);


}());