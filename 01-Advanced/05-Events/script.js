/**
 * newjavascript.js Discription
 * @ Stephen O'Connor, 07-Feb-2015
 *
 * Dependencies: eventUtility.js
 *
 */

// immediately invoked anonymous function
(function() {

	var txtbox = document.getElementById("txtInput");

	// allow only letters
	eventUtility.addEvent(document, "keydown",
		function(evt) {
			// var code = eventUtility.getCharCode(evt);
			var code = evt.keyCode,
				ctrlKey = evt.ctrlKey;
			// altKey = evt.altKey,
			// shiftKey = evt.shiftKey;

			if (ctrlKey && code === 66) {
				alert("You pressed ctrl+B")
			}

			// if ((code >= 65 && code <= 90) ||
			// 	(code >= 97 && code <= 122)) {

			// } else {
			// 	eventUtility.preventDefault(evt);
			// }

			// alert(code);

			// evt.keyCode

			// A 65
			// B 66
			// Z 90

			// a 97
			// z 122

			// 0 48
			// 9 57
		});

	// keydown
	// keyup
	// keypress

}());