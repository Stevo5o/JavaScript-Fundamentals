/* @ Stephen O'Connor */
  (function() {
     
     var pElements = document.getElementsByTagName("p");
     
     alert(pElements.length); // 5
     
     var zx = document.createElement("p");
     
     document.body.appendChild(zx);
     
     alert(pElements.length); // 6
     
  }());