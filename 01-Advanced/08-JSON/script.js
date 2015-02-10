/**
 * script.js Discription
 * @ Stephen O'Connor, 09-Feb-2015
 *
 * Dependencies: data.json
 *
 */

// immediately invoked anonymous function
(function() {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "data.json", true);
	xhr.setRequestHeader("Content-Type",
		"application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			var status = xhr.status;

			if ((status >= 200 && status < 300) ||
				status === 304) {
				var rss = JSON.parse(xhr.responseText)
				for (var i = 0, len = rss.users.length; i < len; i++) {
					console.log(rss.users[i].name);
				}				
			} else {
				alert(status);
			}
		}
	};

	xhr.send(null);

}());