/* @ Stephen O'Connor */
(function () {

   var buttons = document.getElementsByTagName("a");

   var buttonClick = function (event) {
      var target = eventUtility.getTarget(event), 
              className = target.innerHTML.toLowerCase();
      
      eventUtility.preventDefault(event);
      
      document.body.className = className;
   };

   for (var i = 0, len = buttons.length; i < len; i = i + 1) {
      eventUtility.addEvent(buttons[i], "click", buttonClick);
      // removeEvent(buttons[i], "click", buttonClick);
   }
}());