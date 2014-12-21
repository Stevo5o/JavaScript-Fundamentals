/* @ Stephen O'Connor */
(function () {

   var buttons = document.getElementsByTagName("button");
   // DOM level 0 event handlers
   for (var i = 0, len = buttons.length; i < len; i = i + 1) {
      buttons[i].onclick = function () {
         var className = this.innerHTML.toLowerCase();

         document.body.className = className;
      };
      
      // 0 level are volatile, below breaks the code
      // buttons[i].onclick = function() {};
   }
   
//    sayHi = function() {
//             alert('Say "Hi" O\'Connor');
//             alert("Say 'Hi'");
//             alert("Say 'Hi' O'Connor");
//   };
   
   changeMe = function() {
      var heading = document.getElementById('heading');
      heading.innerHTML = "Change on mouseover";
   };
   
   changeMeBack = function() {
      var heading = document.getElementById('heading');
      heading.innerHTML = "Event List";
   };
   
   focusIn = function () {
      alert('I am in the field');
   };
   
   blurOut = function () {
      alert('I am out the field');
   };
   
}());