/* @ Stephen O'Connor */
(function () {

   var mouseHandler = function (event) {
      var target = eventUtility.getTarget(event),
              classData = target.getAttribute("data-body-class");
      // if it has a value - true
      if (classData) {
         eventUtility.preventDefault(event);
         if (event.type === "click") {
            document.body.className = "";
         } else {
            document.body.className = classData;
         }
      }
   };

   eventUtility.addEvent(document, "click", mouseHandler);
   eventUtility.addEvent(document, "mouseover", mouseHandler);
}());