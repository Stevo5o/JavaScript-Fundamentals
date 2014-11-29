/* @ Stephen O'Connor */
(function () {

// code is more flexible - event handler delegetion
   eventUtility.addEvent(document, "click", function (event) {
      var target = eventUtility.getTarget(event),
              tagName = target.tagName,
              classData = target.getAttribute("data-body-class");
// if it has a value - true
      if (classData) {
         eventUtility.preventDefault(event);
         document.body.className = "";
      }
   });
   
   // mouseover
   eventUtility.addEvent(document, "mouseover", function (event) {
      var target = eventUtility.getTarget(event),
              tagName = target.tagName,
              classData = target.getAttribute("data-body-class");
// if it has a value - true
      if (classData) {
         eventUtility.preventDefault(event);
         document.body.className = classData;
      }
   });
}());