/* @ Stephen O'Connor */
(function () {

   var buttons = document.getElementsByTagName("a");
   var buttonClick = function () {
      var className = this.innerHTML.toLowerCase();
      document.body.className = className;
   };
   var hi = function () {
      alert("hi");
   };
    
   for (var i = 0, len = buttons.length; i < len; i = i + 1) {
      buttons[i].addEventListener("click", function (event) {
         var className = this.innerHTML.toLowerCase();
         
         // alert(event.type);         
        // alert(event.target);
        // alert(this);
        event.preventDefault();
         
         document.body.className = className;
      }, false);
   }

// 0 level are volatile, below breaks the code
// buttons[i].onclick = function() {};

// false for I.E 8 and below bubbling, true = capturing
// you can you anonymous function function () { alert("hi"); }
//   buttons[i].addEventListener("click", buttonClick, false);
//   buttons[i].addEventListener("click", hi, false);
//   // typically not used
//   buttons[i].removeEventListener("click", hi, false);
//}

}());