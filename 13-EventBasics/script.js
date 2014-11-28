/* @ Stephen O'Connor */
(function () {

   var buttons = document.getElementsByTagName("button");
   // DOM level 0 event handlers
   for (var i = 0, len = buttons.length; i < len; i = i + 1) {
      buttons[i].onclick = function () {
         var className = this.innerHTML.toLowerCase();

         document.body.className = className;
      };
      
      // 0 level are volatile
      // buttons[i].onclick = function() {};
   }

}());