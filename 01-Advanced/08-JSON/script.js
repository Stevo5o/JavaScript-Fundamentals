/**
 * script.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 * rtj2.json
 */

// immediately invoked anonymous function
(function() {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "rtj2.json", true);

	xhr.setRequestHeader("Content-Type",
		"application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			var status = xhr.status;

			if ((status >= 200 && status < 300) ||
				status === 304) {
				alert(xhr.responseText);
			}
		}
	};

	xhr.send(null);

}());