/* @ Stephen O'Connor */
// live load list
  (function() {
     
     // var pElements = document.getElementsByTagName("p"); // returns live load list
     
     var pElements = document.querySelectorAll("p"); 
     
     alert(pElements.length); // 5
     
     var zx = document.createElement("p");     
         
     document.body.appendChild(zx);
     
     pElements = document.querySelectorAll("p");
     
     alert(pElements.length); // 6
     
  }());